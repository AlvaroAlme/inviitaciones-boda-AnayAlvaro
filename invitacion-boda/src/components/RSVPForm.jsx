import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: "",
    attending: "",   // "si" | "no"
    needBus: "",     // "si" | "no"
    busOption: "",
    numPlazas: 1,
    allergies: "",
  });
  const [errors, setErrors] = useState({});

  /* ────────── VALIDACIÓN ────────── */
  const validate = () => {
    const e = {};
    if (!/^\s*\w+\s+\w+/.test(form.name.trim())) {
      e.name = "Escribe nombre y apellidos.";
    }
    if (form.attending === "") e.attending = "Confirma si asistirás.";

    if (form.attending === "si") {
      if (form.needBus === "") e.needBus = "Indica si necesitas autobús.";

      if (form.needBus === "si") {
        if (!form.busOption) e.busOption = "Selecciona un autobús.";
        if (form.numPlazas < 1 || form.numPlazas > 5) {
          e.numPlazas = "Plazas entre 1 y 5.";
        }
      }
    }
    if (form.allergies.length > 500) e.allergies = "Máx 500 caracteres.";
    return e;
  };

  /* ────────── HANDLERS ────────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);
    setErrors({});

    const { data, error } = await supabase
      .from("form_boda")
      .insert([
        {
          nombre: form.name,
          attending: form.attending,
          need_bus: form.needBus,
          bus_option: form.busOption,
          num_plazas: form.numPlazas,
          alergias: form.allergies,
        },
      ]);

    if (error) {
      console.error("Error al guardar:", error);
      alert("Error al enviar el formulario: " + JSON.stringify(error, null, 2));
      return;
    }

    alert("¡Gracias! Tu respuesta se ha registrado.");
  };

  /* ────────── RENDER ────────── */
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow space-y-6"
    >
      {/* Nombre -------------------------------- */}
      <div>
        <input
          name="name"
          placeholder="Nombre y apellidos"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Asistencia ---------------------------- */}
      <div>
        <p className="font-semibold mb-1">¿Asistirás a la boda?</p>
        {["si", "no"].map((v) => (
          <label key={v} className="mr-6 cursor-pointer">
            <input
              type="radio"
              name="attending"
              value={v}
              checked={form.attending === v}
              onChange={handleChange}
              className="mr-1"
            />
            {v === "si" ? "Sí" : "No"}
          </label>
        ))}
        {errors.attending && (
          <p className="text-red-500 text-sm">{errors.attending}</p>
        )}
      </div>

      {/* Pregunta bus (solo si asiste) ---------- */}
      {form.attending === "si" && (
        <div>
          <p className="font-semibold mb-1">¿Necesitas autobús para desplazarte?</p>
          {["si", "no"].map((v) => (
            <label key={v} className="mr-6 cursor-pointer">
              <input
                type="radio"
                name="needBus"
                value={v}
                checked={form.needBus === v}
                onChange={handleChange}
                className="mr-1"
              />
              {v === "si" ? "Sí" : "No"}
            </label>
          ))}
          {errors.needBus && (
            <p className="text-red-500 text-sm">{errors.needBus}</p>
          )}
        </div>
      )}

      {/* Opciones bus (solo si necesita bus) ---- */}
      {form.needBus === "si" && (
        <>
          {/* Radios bus */}
          <div>
            <p className="font-semibold mb-1">Selecciona autobús:</p>
            {[
              { v: "ida", t: "Solo ida (Ayuntamiento → Magna Garden)" },
              { v: "vuelta00", t: "Solo vuelta (Magna Garden → Hotel JC1 • 00:30 / 04:30)" },
              { v: "idaVuelta00", t: "Ida y vuelta" },
            ].map((o) => (
              <label key={o.v} className="block cursor-pointer">
                <input
                  type="radio"
                  name="busOption"
                  value={o.v}
                  checked={form.busOption === o.v}
                  onChange={handleChange}
                  className="mr-2"
                />
                {o.t}
              </label>
            ))}
            {errors.busOption && (
              <p className="text-red-500 text-sm">{errors.busOption}</p>
            )}
          </div>

          <div>
            <p>¿Cuantas plazas necesitaras?</p>
            <input
              type="number"
              name="numPlazas"
              placeholder="Max 5 plazas"
              min="1"
              max="5"
              value={form.numPlazas}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            {errors.numPlazas && (
              <p className="text-red-500 text-sm">{errors.numPlazas}</p>
            )}
          </div>
        </>
      )}

      {/* Alergias */}
      <div>
        <textarea
          name="allergies"
          placeholder="Alergias o intolerancias (opcional, máx 500 caracteres)"
          value={form.allergies}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          rows={4}
        />
        {errors.allergies && (
          <p className="text-red-500 text-sm">{errors.allergies}</p>
        )}
      </div>

      <button className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition text-lg font-semibold">
        Enviar
      </button>
    </form>
  );
}

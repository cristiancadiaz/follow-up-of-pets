import { useEffect, useState } from "react";
import Error from "./Error";

const Form = ({ patient, setPatient, patientList, sendPatients }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateID = () => {
    const dataDate = Date.now().toString(36);
    const dataNum = Math.random().toString(36).substr(2);

    return dataDate + dataNum;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if ([name, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    //Objeto de paciente

    const pet = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

    if (patient.id) {
      //editar registro
      pet.id = patient.id;

      const updateList = patientList.map((item) =>
        item.id === patient.id ? pet : item
      );

      sendPatients(updateList);
      setPatient({});
    } else {
      //nuevo registro
      pet.id = generateID();
      sendPatients([...patientList, pet]);
    }

    //Reiniciar formulario

    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añadir pacientes y {""}
        <span className="text-indigo-700 font-bold ">Administrarlos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 mx-5"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            className="block text-left text-gray-700 uppercase font-bold"
            htmlFor="petName"
          >
            Nombre de mascota
          </label>
          <input
            id="petName"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Ingrese el nombre de la mascota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-left text-gray-700 uppercase font-bold"
            htmlFor="ownerName"
          >
            Nombre del propietario
          </label>
          <input
            id="ownerName"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Ingrese el nombre del dueño"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-left text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Correo Electronico
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Ingrese su correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-left text-gray-700 uppercase font-bold"
            htmlFor="outPet"
          >
            Alta
          </label>
          <input
            id="outPet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-left text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Sintomas
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>{" "}
          </Error>
        )}
        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          type="submit"
          value={patient.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Form;

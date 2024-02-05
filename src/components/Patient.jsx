const Patient = ({ pet, setPatient, deletePatient }) => {
  const { name, owner, email, date, symptoms, id } = pet;

  const handleDeletePet = () => {
    const res = confirm(`Deseas eliminar el paciente ${name}`);
    if (res) deletePatient(id);
  };
  return (
    <div className="mx-5 mt-5 bg-white shadow-lg px-5 py-10 rounden-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal">{symptoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
          type="button"
          onClick={() => setPatient(pet)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
          type="button"
          onClick={handleDeletePet}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;

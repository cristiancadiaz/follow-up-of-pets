import { useEffect } from "react";
import Patient from "./Patient";

const PatientList = ({ list, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {list && list.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg text-center mt-5 mb-10">
            Administra tus {""}
            <span className="text-indigo-700 font-bold">Citas</span>
          </p>
          {list.map((item) => (
            <Patient
              key={item.id}
              pet={item}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">
            Comienza agregando pacientes {""}
            <span className="text-indigo-700 font-bold">Ahora</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;

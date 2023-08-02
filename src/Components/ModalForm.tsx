import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";

function ModalForm(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 mb-5"
        onClick={handleOpenModal}
      >
        Ajouter un cours
      </button>

      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-lg p-8 min-w-[50%] transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Ajouter un cours</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 10l3.646-3.646a1 1 0 011.415 1.415L11.414 11l3.646 3.646a1 1 0 01-1.415 1.415L10 12.414l-3.646 3.646a1 1 0 01-1.415-1.415L8.586 11 4.939 7.354a1 1 0 111.415-1.415L10 9.586l3.646-3.646a1 1 0 111.415 1.415L11.414 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <form action="POST">

                {/* Nom du cours */}
                <Input
                  type="text"
                  id="nom"
                  name="name"
                  className="border border-gray-300 px-2 py-1 rounded"
                  placeholder="Entrez le nom du cours"
                />

                <br />

                {/* Formateur assigné au cours */}
                <Select label="Sélectionner les formateurs">
                <Option>Nom du formateur 1</Option>
                <Option>Nom du formateur 2</Option>
              </Select>

              <br />

              {/* Formateur assigné au cours */}
              <Select label="Sélectionner la classe">
                <Option>Nom de la classe 1</Option>
                <Option>Nom de la classe 2</Option>
              </Select>

              <br />

                {/* Date de début du cours */}
                <label htmlFor="dateDebut">Entrez la date de début</label>
                <br />
                <Input
                  type="date"
                  id="dateDebut"
                  name="dateDebut"
                  className="border border-gray-300 px-2 py-1 rounded"
                />

                <br />

                {/* Date de fin du cours */}
                <label htmlFor="nom">Entrez la date de fin</label>
                <br />
                <Input
                  type="date"
                  id="dateFin"
                  name="dateFin"
                  className="border border-gray-300 px-2 py-1 rounded"
                />

              </form>
            </div>
            <div className="flex items-center justify-end">
              <Button
                onClick={handleCloseModal}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Fermer
              </Button>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Enregistrer
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalForm;

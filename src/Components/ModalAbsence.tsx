import { Button, Checkbox, Input, Option, Select, Textarea } from '@material-tailwind/react';
import { useState } from "react";

const ModalAbsence = () => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (<>

        <Button className='bg-red-700 w-2/4' onClick={handleOpenModal}>Signaler</Button>

        {showModal && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
                <div className="bg-white rounded-lg p-8 min-w-[50%] max-h-[90%] overflow-y-auto transition-transform duration-300 ease-in-out">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Signaler une absence/retard</h3>
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

                            {/* Nom de l'étudiant si il s'agit d'un formateur qui signale un étudiant */}
                            {/* Nom de l'étudiant */}

                            <label htmlFor="student">Entrez le nom de l'étudiant</label>
                            <br />
                            <Input
                                type="text"
                                id="student"
                                name="student"
                                className="border border-gray-300 px-2 py-1 rounded"
                                placeholder="Entrez le nom de l'étudiant"
                            />

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

                            <br />

                            <label htmlFor="select">Est-ce une absence ou un retard ?</label>
                            {/* Type d'absence */}
                            <Select id='select' label="Absence ou retard ?">
                                <Option>Absence</Option>
                                <Option>Retard</Option>
                            </Select>

                            <br />

                            {/* Justification admise ou non */}

                            <Checkbox
                                name='justified'
                                label="Est-ce justifié ?"
                                value=""
                            />

                            <br />
                            <br />

                            <label htmlFor="motif">Motif de l'absence ou du retard:</label>

                            <Textarea
                                label="Motif"
                                name='motif'
                            />



                            <br />

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
};

export default ModalAbsence;
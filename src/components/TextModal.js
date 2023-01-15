import React from "react";

const TextModal = () => {
    return (
        <div className="text-modal">
            <div className="modal-line line-1">Hey, its</div>
            <div className="modal-line line-2">
                <span className="text-blue">Hataf</span>{" "}
                <span className="text-red">Atif</span>
            </div>
            <div className="modal-line line-3">
                I am a Software Developer, specializing in{" "}
                <strong>Full Stack Web Development</strong>, mainly utilizing
                JavaScript and Python.
            </div>
            <div className="modal-line line-4">
                That is not all though. I have a very diverse skill-set and have
                worked with a number of different domains, including but not
                limited to Desktop and Mobile App Development, Data Analytics
                and BI Engineering.
            </div>
            <div className="modal-line line-5">
                <button className="btn">Projects</button>
                <button className="btn">Hire me</button>
            </div>
        </div>
    );
};

export default TextModal;

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
                <strong>Full Stack Web Development</strong>, mainly utilizing{" "}
                <strong>JavaScript</strong> and <strong>Python</strong>.
            </div>
            <div className="modal-line line-4">
                I also have a very diverse skill-set from
                working in a huge number of different domains, including but not
                limited to Desktop and Mobile App Development, Data Analytics
                and BI Engineering.
            </div>
            <div className="modal-line line-5">
                <div className="btn">Projects</div>
                <div className="btn">Hire me</div>
            </div>
        </div>
    );
};

export default TextModal;

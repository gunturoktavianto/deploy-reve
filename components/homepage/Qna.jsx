const Qna = () => {
    return (
        <>
            <h2 className="font-bold text-center text-6xl mt-28 text-black">
                FAQ
            </h2>
            <div className="container mx-auto mt-8 w-[80%] pb-20 text-black">
                <div className="collapse collapse-arrow border-solid border-2 border-black mt-5">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-semibold">
                        What is ReVe?
                    </div>
                    <div className="collapse-content">
                        <p className="text-lg">
                            ReVe is a digital platform that provides clothing
                            lending services to help overcome, reduce and
                            suppress the increasing amount of textile waste in
                            Indonesia.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border-solid border-2 border-black mt-5">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-semibold">
                        What is ReVe's vision?
                    </div>
                    <div className="collapse-content">
                        <p className="text-lg">
                            Reduce the amount of textile waste due to under
                            committed purchasing in Jabodetabek
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Qna;

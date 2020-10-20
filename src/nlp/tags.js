const nlp = require("compromise");

let run = () => {
  let doc = nlp(
    "Digimon Survive creators indicate possible delay in a reply to tweet from fan."
  );

  console.log(doc.topics().json());
};

export default run;

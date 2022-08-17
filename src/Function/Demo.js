// import React, { useState } from "react";

// const Demo = () => {
//   const [demo, demoF] = useState({
//     input: "",
//     reply: {
//       demoName: "",
//     },
//   });

//   function handleDemo(e) {
//     demoF((prev) => {
//       return {
//         ...prev,
//         reply: {
//           ...prev.reply,
//           demoName: e.target.value,
//         },
//       };
//     });

//     console.log(demo);
//   }
//   return (
//     <div>
//       <input type="text" value={demo.reply.demoName} onChange={handleDemo} />
//     </div>
//   );
// };

// export default Demo;

import React, { useState } from "react";

const Demo = () => {
  const [input, inputF] = useState("");
  const [demoName, demoNameF] = useState("");

  const [demo, demoF] = useState({
    input: "",
    reply: [
      //   {
      //     demoName: "",
      //     name: 123,
      //   },
    ],
  });

  function handleDemo(e) {
    demoNameF(e.target.value);
  }

  function handleSub(e) {
    const obj = {
      demoName,
      name: 123,
    };
    const newArray = [...demo.reply, obj];
    demoF((prev) => {
      return {
        ...prev,
        input,
        reply: newArray,
      };
    });

    console.log(demo);
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          inputF(e.target.value);
        }}
      />
      <input type="text" value={demoName} onChange={handleDemo} />
      <button onClick={handleSub}>Submit</button>
    </div>
  );
};

export default Demo;

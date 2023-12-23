import React from "react";
import Entry from "./Entry";
import emojipedia from "../data/emojipedia";

//  const emojis = (emo) => {
//   return <Entry key={emo.id} emoji={emo.emoji} name={emo.name} meaning={emo.meaning} />;
// };

const App = () => {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emo) => (
          <Entry
            key={emo.id}
            emoji={emo.emoji}
            name={emo.name}
            meaning={emo.meaning}
          />
        ))}
      </dl>
    </div>
  );
};

export default App;

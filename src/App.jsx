import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [emoji1, setEmoji1] = useState('');
  const [emoji2, setEmoji2] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateRangoli = async () => {
    setLoading(true);
    setImageUrl('');

    const prompt = `Create a rangoli pattern with these emojis: ${emoji1} and ${emoji2}. Arrange them in a beautiful, symmetrical pattern typical of traditional Indian rangolis.`;

    try {
      const response = await axios.post('/.netlify/functions/generateEmojiRangoli', {
        prompt,
      });
      const image_url = response.data.data[0].url;
      setImageUrl(image_url);
    } catch (error) {
      console.error('Error generating emoji rangoli:', error);
      alert('Failed to generate rangoli.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Emoji Rangoli Generator</h2>
      <h4>🪔Happy Diwali🪔</h4>
      <img src="/PNG_rw.png" alt="by Randomwalk" />
      <p> Use emoji keyboard on phone 📱.<br></br>
      Copy paste these emojis on laptop 🧑‍💻.</p>
      <p>
      😆😍😃😄😁😆😅🤣😂🙂😉😊<br></br>

      😇🥰🤩😘😗😚😙😏😋😛😜😶<br></br>

      🤪😝🤑🤗🤭🤫🤔🤤🤠🤨😐😑<br></br>

      🥳😎🤓🧐🤐🤥🙂‍🙂🙃😌😬😮<br></br>

      😪😴😷😕😟🙁😮😯😲😳🤯🥱<br></br>

      😵🥺😦😧😨😰😥😢😭😱😖😣<br></br>

      😞😓😩😫😤😡😠🤬👿😈👿💀<br></br>
      🤡👹👺👻👽👾🤖😻😼🙈🙉🙊<br></br>
      Context<br></br>
      🏔️⛰️🌋🗻🏕️🏖️🏜️🏝️🏞️🏟️🏛️🏗️<br></br>
      🏪🏫🏬🏭🏯🏰💒🗼🗽⛪🕌🛕<br></br>
      🕍⛩️🕋⛲⛺🌁🌃🏙️🌄🌅🌆🌇<br></br>
      🌉♨️🎠🎡🎢💈🎪🛎️🗿🚂🚅🚌🚖<br></br>
      🎆🎇🧨🎂🍰🧁🥧
      </p>
      <div>
        <input
          type="text"
          value={emoji1}
          onChange={(e) => setEmoji1(e.target.value)}
          placeholder="Select first emoji"
          maxLength="2"
          size={30}
        />
        <input
          type="text"
          value={emoji2}
          onChange={(e) => setEmoji2(e.target.value)}
          placeholder="Select second emoji"
          maxLength="2"
          size={30}
        />
        <br></br>
        <button onClick={generateRangoli} disabled={loading || !emoji1 || !emoji2}>
          {loading ? 'Generating...' : 'Generate Rangoli'}
        </button>
      </div>
      {imageUrl && (
        <div style={{ marginTop: '20px' }}>
          <h2>Your Emoji Rangoli</h2>
          <img src={imageUrl} alt="Generated Emoji Rangoli" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default App;

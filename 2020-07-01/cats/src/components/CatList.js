import React from 'react';

const styles = {
  container: {
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
};

const CatList = ({ cats, removeCat }) => (
  <div>
    {cats.map((cat, idx) => (
      <div key={`cat-${idx}`} style={styles.container}>
        <img alt="gatito" src={URL.createObjectURL(cat)} />
        <button onClick={() => removeCat(idx)} style={styles.button}>🗑️</button>
      </div>
    ))}
  </div>
);

export default CatList;
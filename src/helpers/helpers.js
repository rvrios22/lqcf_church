//data is array from collection to be move
//collection is string name of collection to move to
const move = async (data, collection) => {
    data.forEach((item) => {
      setDoc(doc(db, collection, data.id), item);
    });
    alert("done");
  };
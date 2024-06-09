const Crud = async (url = '', operations = null) => {
    let errmsg = null;
    try {
      const data = await fetch(url, operations);
      if (!data.ok) throw Error("Reload the page");
    } catch (err) {
      errmsg = err.message;
    } finally {
      return errmsg;
    }
  };
  
  export default Crud;
  
const NewPetForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="src-input">Image Source:</label>
      <input type="text" name="src" id="src-input" />
      <label htmlFor="caption-input">Caption:</label>
      <input type="text" name="caption" id="caption-input" />
      <button>Submit</button>
    </form>
  )
}

export default NewPetForm;
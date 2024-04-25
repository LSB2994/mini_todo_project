export const getAllNotes = async () => {
    const results = await fetch(`${process.env.NEXTAUTH_URL}/register`);
    const allNotes = await results.json();
    console.log("All notes : ", allNotes);
  
    return allNotes;
  };
  
  // create a new note
  export const addNewNote = async (request) => {
    console.log("Request : ", request);
    const result = await fetch(`${process.env.NEXTAUTH_URL}/api`, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ content: request }),
      next: {
        tags: ["note"],
      },
    });
    const note = result;
    console.log("Result : ", note);
    return note;
  };
  
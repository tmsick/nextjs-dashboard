import React from "react";

const page: React.FC = () => {
  async function create(formData: FormData) {
    "use server";

    console.log("[FormData]", formData);

    const name = formData.get("name");
    const age = formData.get("age");
    if (!(name && age)) {
      return;
    }
    console.log(`[name] ${name} (${typeof name})`);
    console.log(`[age] ${age} (${typeof age})`);
  }

  return (
    <form action={create}>
      <div>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input name="age" type="number" />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default page;

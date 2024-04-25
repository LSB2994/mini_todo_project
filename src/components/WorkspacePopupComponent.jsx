import Image from "next/image";
import React from "react";

export default function WorkspacePopupComponent() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="cursor-pointer">
        <Image src={"/assets/icons/plus.svg"} width={22} height={22} />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <form className="modal" role="dialog" action={async(form)=>{

      "use server"
      const w_name = form.get("workspaceName")
      console.log(w_name);
      await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsc2JAZ21haWwuY29tIiwiaWF0IjoxNzEzOTUxOTEyLCJleHAiOjE3MTM5Njk5MTJ9.bNfAsmobr86fpp8rKYEapMf93i6S0-_ELwNUGil_ugY"
        },
        body:JSON.stringify({workspaceName:w_name})
      })

return
      }}>
        <div className="modal-box">
          <h3 className="font-bold text-lg capitalize">create new workspace</h3>
          <input
            type="text"
            name="workspaceName"
            placeholder="workspace name"
            className="mt-3 block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
          />
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="bg-blue-600 rounded-lg text-white mr-3 h-12 px-5 flex items-center">
              Create
            </label>
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

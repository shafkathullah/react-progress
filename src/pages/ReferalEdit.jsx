import { useState } from "react";
import { useForm } from "react-hook-form";

function createArrayWithNumbers(length) {
  return Array.from({ length }, (_, k) => k);
}

const ReferalEdit = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [size, setSize] = useState(1);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl font-bold">Request referals</h1>
      <form className="my-16" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <label className="block text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="block bg-gray-100 px-3 py-2 rounded"
            name="email"
            placeholder="john@appleseed.com"
            ref={register({ required: true })}
          />
          {errors.email && (
            <span className="text-xs text-red-700">This field is required</span>
          )}
        </div>

        <div className="mb-8">
          <p className="block text-sm mb-2">Target jobs</p>
          {createArrayWithNumbers(size).map((number) => {
            return (
              <div key={number} className="bg-gray-100 p-5 rounded w-1/3 mb-10">
                <div className="mb-8">
                  <label
                    className="block text-sm mb-2"
                    htmlFor={`company[${number}]`}
                  >
                    Company
                  </label>
                  <input
                    className="block  px-3 py-2 rounded"
                    name={`company[${number}]`}
                    placeholder="Company Name"
                    ref={register({ required: true })}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-700">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    className="block text-sm mb-2"
                    htmlFor={`role[${number}]`}
                  >
                    Role
                  </label>
                  <input
                    className="block  px-3 py-2 rounded"
                    name={`role[${number}]`}
                    placeholder="Role"
                    ref={register({ required: true })}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-700">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    className="block text-sm mb-2"
                    htmlFor={`description[${number}]`}
                  >
                    Description URL
                  </label>
                  <input
                    className="block  px-3 py-2 rounded"
                    name={`description[${number}]`}
                    placeholder="Description URL"
                    ref={register({ required: true })}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-700">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          <button
            className="px-4 py-2 bg-indigo-600 text-sm text-white font-semibold rounded"
            type="button"
            onClick={() => setSize(size + 1)}
          >
            Add Target Company
          </button>
        </div>

        <div className="mb-8">
          <label className="block text-sm mb-2" htmlFor="current_company">
            Current company
          </label>
          <input
            className="block bg-gray-100 px-3 py-2 rounded"
            name="current_company"
            placeholder="Company Name"
            ref={register({ required: true })}
          />
          {errors.company && (
            <span className="text-xs text-red-700">This field is required</span>
          )}
        </div>
        <div className="mb-8">
          <label className="block text-sm mb-2" htmlFor="current_role">
            Current role
          </label>
          <input
            className="block bg-gray-100 px-3 py-2 rounded"
            name="current_role"
            placeholder="Current role"
            ref={register({ required: true })}
          />
          {errors.role && (
            <span className="text-xs text-red-700">This field is required</span>
          )}
        </div>
        <div className="mb-8">
          <label className="block text-sm mb-2" htmlFor="linkedin">
            LinkedIn
          </label>
          <input
            className="block bg-gray-100 px-3 py-2 rounded"
            name="linkedin"
            placeholder="LinkedIn URL"
            ref={register({ required: true })}
          />
          {errors.linkedin && (
            <span className="text-xs text-red-700">This field is required</span>
          )}
        </div>
        <input
          className="px-4 py-2 bg-indigo-600 text-sm text-white font-semibold rounded"
          type="submit"
          value="Get Referals"
        />
      </form>
    </div>
  );
};

export default ReferalEdit;

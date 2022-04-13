import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
  cate?: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  let setCate = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue, getValues } = useForm<IForm>();
  const handleValid = ({ toDo, cate }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    const newCate = getValues("cate");
    //useSetRecoilState(newCate);
    setValue("toDo", "");
    setValue("cate", "");
  }; //category 값 받아서 버튼 만들어주자.
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
      <input
        {...register("cate", {
          value: "",
        })}
        placeholder="Write a custom category"
      />
      <button>Add a custom category</button>
    </form>
  );
}

export default CreateToDo;

import NewCategoryForm from "@/components/dashboard/categories/NewCategoryForm";
import Heading from "@/components/dashboard/Heading";

const NewCategoryPage = () => {
  return (
    <div className="flex flex-col container">
      <Heading title="New Category" />
      <div className="flex justify-center">
        <NewCategoryForm />
      </div>
    </div>
  );
};

export default NewCategoryPage;

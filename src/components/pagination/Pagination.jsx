import CustomButton from "../button/CustomButton";

const Pagination = () => {
  return (
    <div className="flex justify-between mt-4">
      <CustomButton>Previous</CustomButton>
      <CustomButton>Next</CustomButton>
    </div>
  );
};

export default Pagination;

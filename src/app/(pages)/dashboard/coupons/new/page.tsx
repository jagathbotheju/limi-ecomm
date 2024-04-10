import NewCouponForm from "@/components/coupons/NewCouponForm";
import NewCategoryForm from "@/components/dashboard/categories/NewCategoryForm";
import Heading from "@/components/dashboard/Heading";

const NewCouponPage = () => {
  return (
    <div className="flex flex-col container">
      <Heading title="New Coupon" />
      <div className="flex justify-center">
        <NewCouponForm />
      </div>
    </div>
  );
};

export default NewCouponPage;

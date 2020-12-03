import Chicago from '../fzoozai.jpg';

const Profile = () => (
  <div className="text-center sm:text-left">
    <div className="flex flex-col items-center">
      <div
        className="text-indigo-300 h-72 w-72 bg-ch bg-cover rounded-full mt-4 border-4 border-gray-100"
        style={{ backgroundImage: `url(${Chicago})` }}
      ></div>
      <div className="text-primary-900 mt-6 mb-8 max-w-md text-center px-4 font-primary">
        I am a passionate software developer with experience in various program-
        ming languages. The continuous change in the world of technology
        inspires me to always keep learning new skills and techniques to build
        meaningful and robust products.
      </div>
    </div>
  </div>
);
export default Profile;

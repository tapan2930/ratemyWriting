import Image from "next/image";
const NavigationBar = () => {
  return (
    <nav class="block container w-full px-6 py-0 md:py-2 lg:py-3 mx-auto text-headline bg-background  border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <div class="flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="mr-4 flex items-center cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
        >
          <Image src="/assets/img/logo.png" alt="logo" width={50} height={50} />
          Rate My Writing
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;

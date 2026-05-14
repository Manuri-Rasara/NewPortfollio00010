import { Button } from "@/components/ui/button";

const ButtonSocialIconDemo = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/* google */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
        onClick={() => window.open("https://www.instagram.com/itsmanuri/", "_blank")}
      >
        <img
          src="/Assets/SocialIcons/Insta.webp"
          alt="google icon"
          className="h-4 w-4"
        />
      </Button>
      {/* github */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
        onClick={() => window.open("https://github.com/Manuri-Rasara", "_blank")}
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
          alt="github icon"
          className="dark:hidden h-4 w-4"
        />
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
          alt="github icon"
          className="hidden dark:block h-4 w-4"
        />
      </Button>
      {/* linkedin */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
        onClick={() => window.open("https://www.linkedin.com/in/manurihewage/", "_blank")}
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
          alt="linkedin icon"
          className="h-4 w-4"
        />
      </Button>
      {/* facebook */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
        onClick={() => window.open("https://www.facebook.com/manuri.hewage.2025", "_blank")}
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-facebook.svg"
          alt="facebook icon"
          className="h-4 w-4"
        />
      </Button>
    </div>
  );
};

export default ButtonSocialIconDemo;

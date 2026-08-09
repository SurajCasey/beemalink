interface CardProps {
  picture: string;
  name: string;
  text: string;
  variant?: "dark" | "blue" | "light";
}

const Card = ({
  picture,
  name,
  text,
  variant = "dark",
}: CardProps) => {
  const styles = {
    dark: "bg-primary text-white",
    blue: "bg-[#416CD2] text-white",
    light: "bg-[#D9DDE7] text-heading",
  };

  return (
    <div
      className={`
        flex min-h-80 flex-col items-center
        justify-center px-8 py-8
        text-center
        ${styles[variant]}
      `}
    >
      {/* Profile image */}
      <div className="h-16 w-16 overflow-hidden rounded-full">
        <img
          src={picture}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Name */}
      <h3 className="mt-5 font-montserrat text-sm font-semibold">
        {name}
      </h3>

      {/* Review */}
      <p className="mt-5 max-w-60 text-[13px] leading-[1.6]">
        {text}
      </p>
    </div>
  );
};

export default Card;
import SlopeSeparator from "./SlopeSeparator";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "grey" | "vandrer";
  slopeTop?: boolean;
  slopeBottom?: boolean;
  slopeAngle?: "left" | "right";
}

export default function Section({
  children,
  className = "",
  bg = "white",
  slopeTop = false,
  slopeBottom = false,
  slopeAngle = "right",
}: SectionProps) {
  const bgColors = {
    white: "bg-white",
    grey: "bg-grey",
    vandrer:
      "bg-gradient-to-br from-primary via-primary to-[#0d2a24] text-white",
  };

  const slopeColor =
    bg === "vandrer"
      ? "text-primary"
      : bg === "grey"
      ? "text-grey"
      : "text-white";

  return (
    <section
      className={`relative py-16 md:py-28 px-4 md:px-8 ${bgColors[bg]} ${className}`}
    >
      {slopeTop && (
        <SlopeSeparator position="top" color={slopeColor} angle={slopeAngle} />
      )}
      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
      {slopeBottom && (
        <SlopeSeparator
          position="bottom"
          color={slopeColor}
          angle={slopeAngle === "left" ? "right" : "left"}
        />
      )}
    </section>
  );
}

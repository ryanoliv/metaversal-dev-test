import ErrorIcon from "@svgs/error.svg";

interface ErrorCardProps {
  title: string;
}

export default function ErrorCard({ title }: ErrorCardProps) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center bg-contentSurface border border-contentBorder p-6 rounded-xl text-center w-full">
      <ErrorIcon />
      <div className="flex flex-col gap-2">
        <h3 className="text-md text-textPrimary">{title}</h3>
        <p className="text-textSecondary">
          We're so sorry but it's for the test.
        </p>
      </div>
    </div>
  );
}

interface StarProps {
  id: number;
  title: string;
  description: string;
  style: string | "none";
  changeGradeIndex: (index: number) => void;
}

export function Star({
  id,
  title,
  description,
  style,
  changeGradeIndex,
}: StarProps) {
  return (
    <>
      <button
        key={id}
        tabIndex={-1}
        className="flex flex-1 flex-col items-center"
        type="button"
        title={title}
        onClick={() => changeGradeIndex(id as number)}
      >
        <svg
          tabIndex={id}
          key={id}
          onClick={() => changeGradeIndex(id as number)}
          width="40"
          height="40"
          fill="none"
          stroke="#FFAC33"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-labelledby="starTitle starDescription"
          role="img"
          className="p-[3px] focus:stroke-2 hover:stroke-2"
        >
          <polygon
            points="26.287 32.529, 25.135 32.158, 17.000 26.324, 8.865 32.158, 6.553 32.150, 5.832 29.956, 8.866 20.164, 0.804 14.483, 0.096 12.280, 1.962 10.917, 11.947 10.902, 15.126 1.353, 17.000 0.000, 18.875 1.353, 22.000 10.902, 32.036 10.917, 33.903 12.280, 33.195 14.483, 25.133 20.164, 28.167 29.956, 27.447 32.150, 26.287 32.529, 26.287 32.529"
            fill={style}
          />
          <title id="starTitle" className="bg-white">
            {title}
          </title>
          <desc id="starDescription">{description}</desc>
        </svg>
      </button>
    </>
  );
}

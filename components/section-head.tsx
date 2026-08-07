export function SectionHead({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-xl mb-16">
      <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">
        {tag}
      </span>
      <h2 className="font-display font-semibold text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight">
        {title}
      </h2>
      {desc && (
        <p className="text-text-mid text-[17px] mt-4 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}

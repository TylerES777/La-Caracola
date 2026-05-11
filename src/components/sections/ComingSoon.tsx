import { SeashellGlyph } from "@/components/ui/SeashellGlyph";

type Props = {
  eyebrow: string;
  title: string;
};

export function ComingSoon({ eyebrow, title }: Props) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <SeashellGlyph className="h-10 w-10 text-gold-deep mx-auto" />
        <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-teal-deep">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display italic text-5xl md:text-6xl text-ink leading-tight">
          {title}
        </h1>
        <div className="mt-8 mx-auto h-px w-16 bg-gold/60" />
        <p className="mt-8 text-sm text-grey-warm font-body">
          En construcción · This section will be designed in the next pass.
        </p>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Banknote,
  CalendarClock,
  Clock,
  IdCard,
  GraduationCap,
  MapPin,
  Languages,
  Check,
} from "lucide-react";
import ategoBg from "../assets/atego-bg.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mercedes Atego üçün sürücü axtarılır | Almaniya" },
      { name: "description", content: "Almaniyada şəhərdaxili daşımalar üçün Mercedes-Benz Atego sürücüsü vakansiyası. C1/C/CE sürücülük vəsiqəsi ilə müraciət edin." },
      { property: "og:title", content: "Mercedes Atego üçün sürücü axtarılır | Almaniya" },
      { property: "og:description", content: "Almaniyada şəhərdaxili daşımalar üçün Mercedes-Benz Atego sürücüsü vakansiyası. C1/C/CE sürücülük vəsiqəsi ilə müraciət edin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const categories = ["B", "C1", "C1E", "C", "CE", "D"] as const;

type Category = (typeof categories)[number];

function Index() {
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    dogumTarixi: "",
    epoct: "",
    telefon: "",
    peshe: "",
    isTecrubesi: "",
    dilBilikleri: "",
  });
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background font-sans">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ategoBg.url})` }}
      />
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1340px] flex-col px-4 py-6 sm:px-6 lg:px-8">
        {/* Compact hero */}
        <header className="pt-2 pb-6 text-center sm:pt-4 sm:pb-8">
          <p className="text-xs font-semibold tracking-[0.15em] text-primary sm:text-sm">
            VAKANSİYA · ALMANİYA · ŞƏHƏRDAXİLİ DAŞIMALAR
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            MERCEDES ATEGO ÜÇÜN SÜRÜCÜ AXTARILIR
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Sabit marşrut, nizamlı iş saatları və müasir avtomobillər. Tələblərə uyğunsansa,
            məlumatlarını doldur və müraciət et.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid flex-1 grid-cols-1 gap-5 lg:grid-cols-[45fr_55fr] lg:items-start">
          {/* Left column: Requirements */}
          <section className="flex flex-col gap-4">
            {/* Compact info cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <InfoCard
                icon={<Banknote className="h-4 w-4" />}
                label="Əmək haqqı"
                value="2.700 € brutto-dan"
              />
              <InfoCard
                icon={<Clock className="h-4 w-4" />}
                label="İş vaxtı"
                value="B.e.–C., şəhərdaxili"
              />
              <InfoCard
                icon={<CalendarClock className="h-4 w-4" />}
                label="Başlama"
                value="qısa müddətdə mümkündür"
              />
            </div>

            {/* Requirements */}
            <div className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm sm:p-5">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                TƏLƏBLƏR
              </h2>
              <div className="mt-4 space-y-3">
                <RequirementItem
                  icon={<IdCard className="h-4 w-4" />}
                  title="C1 və ya C/CE kateqoriyası"
                  description="Mercedes-Benz Atego üçün ən azı C1 (7,5 t), daha yaxşısı C/CE sürücülük vəsiqəsi lazımdır."
                />
                <RequirementItem
                  icon={<GraduationCap className="h-4 w-4" />}
                  title="Sürücü kartı və Modul 95"
                  description="Etibarlı sürücü kartı və BKrFQG üzrə təlim / Modul 95 olmalıdır."
                />
                <RequirementItem
                  icon={<MapPin className="h-4 w-4" />}
                  title="İş təcrübəsi"
                  description="Şəhər və ya regional daşımada sürücülük təcrübəsi üstünlükdür."
                />
                <RequirementItem
                  icon={<Languages className="h-4 w-4" />}
                  title="Alman dili"
                  description="Müştərilərlə və şirkətlə ünsiyyət üçün minimum A2/B1 səviyyəsində alman dili."
                />
              </div>
            </div>
          </section>

          {/* Right column: Application form */}
          <section className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm sm:p-5 lg:sticky lg:top-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              MƏLUMATLARINIZ
            </h2>

            {submitted ? (
              <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-primary/30 bg-primary/10 py-10 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  Müraciətiniz qəbul edildi
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Əlaqə saxlanılacaq.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <TextField
                    label="Ad"
                    placeholder="Adınız"
                    value={form.ad}
                    onChange={(v) => setForm((s) => ({ ...s, ad: v }))}
                    required
                  />
                  <TextField
                    label="Soyad"
                    placeholder="Soyadınız"
                    value={form.soyad}
                    onChange={(v) => setForm((s) => ({ ...s, soyad: v }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <TextField
                    label="Doğum tarixi"
                    placeholder="tt.mm.ijjj"
                    value={form.dogumTarixi}
                    onChange={(v) => setForm((s) => ({ ...s, dogumTarixi: v }))}
                    required
                  />
                  <TextField
                    label="E-poçt"
                    type="email"
                    placeholder="email@example.com"
                    value={form.epoct}
                    onChange={(v) => setForm((s) => ({ ...s, epoct: v }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <TextField
                    label="Telefon"
                    placeholder="+49 ..."
                    value={form.telefon}
                    onChange={(v) => setForm((s) => ({ ...s, telefon: v }))}
                    required
                  />
                  <TextField
                    label="Peşə"
                    placeholder="Məsələn, sürücü"
                    value={form.peshe}
                    onChange={(v) => setForm((s) => ({ ...s, peshe: v }))}
                  />
                </div>

                <TextAreaField
                  label="İş təcrübəsi"
                  placeholder="İş təcrübəniz haqqında qısaca məlumat"
                  value={form.isTecrubesi}
                  onChange={(v) => setForm((s) => ({ ...s, isTecrubesi: v }))}
                  rows={2}
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Sürücülük kateqoriyaları
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => {
                      const selected = selectedCategories.includes(cat);
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => toggleCategory(cat)}
                          className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                            selected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-input text-foreground hover:border-primary/50"
                          }`}
                        >
                          <span
                            className={`grid h-4 w-4 place-items-center rounded-sm border ${
                              selected
                                ? "border-primary-foreground bg-primary-foreground text-primary"
                                : "border-muted-foreground"
                            }`}
                          >
                            {selected && <Check className="h-3 w-3" />}
                          </span>
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <TextAreaField
                  label="Dil bilikləri"
                  placeholder="Hansi dilləri bilirsiniz və səviyyələriniz"
                  value={form.dilBilikleri}
                  onChange={(v) => setForm((s) => ({ ...s, dilBilikleri: v }))}
                  rows={2}
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-base"
                >
                  Müraciəti davam etdir
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Məlumatlarınız yalnız vakansiya üzrə əlaqə yaratmaq üçün istifadə olunur.
                </p>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card/80 p-2.5 backdrop-blur-sm">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold leading-tight text-foreground">{value}</p>
      </div>
    </div>
  );
}

function RequirementItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 rounded-lg border border-border bg-secondary/50 p-3">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full resize-none rounded-lg border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

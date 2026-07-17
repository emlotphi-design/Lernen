"use client";

import { useState } from "react";
import {
  BookOpenText,
  Library,
  Layers,
  ListChecks,
  Search,
  Heart,
  Flame,
  Trophy,
  Settings,
  Globe,
  Moon,
  Sun,
  Menu,
  ChevronRight,
  Check,
  ArrowRight,
  Sparkles,
  Volume2,
  GraduationCap,
  Loader2,
  Command as CommandIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Kbd } from "@/components/ui/kbd";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { LevelBadge, cefrLevels } from "@/components/ui/level-badge";
import { FadeIn } from "@/components/motion/fade-in";
import { Section, SubLabel } from "./_components/section";
import { Swatch, RampSwatch } from "./_components/swatch";

const TOC = [
  { id: "colors", label: "Color" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "radius", label: "Radius" },
  { id: "shadows", label: "Shadows" },
  { id: "icons", label: "Icons" },
  { id: "buttons", label: "Buttons" },
  { id: "inputs", label: "Inputs" },
  { id: "cards", label: "Cards" },
  { id: "navigation", label: "Navigation" },
  { id: "motion", label: "Motion" },
  { id: "breakpoints", label: "Breakpoints" },
];

const ICONS = [
  ["GraduationCap", GraduationCap],
  ["BookOpenText", BookOpenText],
  ["Library", Library],
  ["Layers", Layers],
  ["ListChecks", ListChecks],
  ["Search", Search],
  ["Heart", Heart],
  ["Flame", Flame],
  ["Trophy", Trophy],
  ["Settings", Settings],
  ["Globe", Globe],
  ["Sun", Sun],
  ["Moon", Moon],
  ["Menu", Menu],
  ["Check", Check],
  ["ArrowRight", ArrowRight],
  ["Sparkles", Sparkles],
  ["Volume2", Volume2],
] as const;

export default function StyleGuidePage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="mx-auto flex max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:px-8">
      <nav className="sticky top-20 hidden h-fit w-44 shrink-0 flex-col gap-1 lg:flex">
        <span className="mb-2 text-label uppercase tracking-wide text-muted-foreground">
          On this page
        </span>
        {TOC.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-md px-2 py-1.5 text-body-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="min-w-0 flex-1">
        <FadeIn>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-caption font-medium text-muted-foreground">
            <Sparkles className="size-3" />
            Internal reference
          </span>
          <h1 className="mt-4 text-h1">Design system</h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The tokens and components behind Deutschlernen — one palette, one type scale, one
            set of primitives, reused everywhere so the product feels like a single, considered
            surface instead of a pile of screens.
          </p>
        </FadeIn>

        {/* ---------------------------------------------------------------- Colors */}
        <Section
          id="colors"
          title="Color"
          description="Semantic tokens carry meaning and flip between light and dark. Primitive ramps sit underneath as raw reference values."
        >
          <SubLabel>Semantic tokens</SubLabel>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <Swatch name="Background" varName="--background" className="bg-background" />
            <Swatch name="Surface" varName="--surface" className="bg-surface" />
            <Swatch name="Card" varName="--card" className="bg-card" />
            <Swatch name="Primary" varName="--primary" className="bg-primary" />
            <Swatch name="Secondary" varName="--secondary" className="bg-secondary" />
            <Swatch name="Muted" varName="--muted" className="bg-muted" />
            <Swatch name="Accent" varName="--accent" className="bg-accent" />
            <Swatch name="Border" varName="--border" className="bg-border" />
            <Swatch name="Destructive" varName="--destructive" className="bg-destructive" />
            <Swatch name="Success" varName="--success" className="bg-success" />
            <Swatch name="Warning" varName="--warning" className="bg-warning" />
          </div>

          <SubLabel>
            <span className="mt-8 block">CEFR level colors</span>
          </SubLabel>
          <div className="flex flex-wrap gap-2">
            {cefrLevels.map((level) => (
              <div
                key={level}
                className="flex items-center gap-2 rounded-full border border-border bg-card py-1 pe-3 ps-1.5"
              >
                <LevelBadge level={level} />
                <span className="text-body-sm text-muted-foreground">Level {level}</span>
              </div>
            ))}
          </div>

          <SubLabel>
            <span className="mt-8 block">Primary ramp</span>
          </SubLabel>
          <div className="flex gap-1.5">
            <RampSwatch name="50" className="bg-primary-50" />
            <RampSwatch name="100" className="bg-primary-100" />
            <RampSwatch name="200" className="bg-primary-200" />
            <RampSwatch name="300" className="bg-primary-300" />
            <RampSwatch name="400" className="bg-primary-400" />
            <RampSwatch name="500" className="bg-primary-500" />
            <RampSwatch name="600" className="bg-primary-600" />
            <RampSwatch name="700" className="bg-primary-700" />
            <RampSwatch name="800" className="bg-primary-800" />
            <RampSwatch name="900" className="bg-primary-900" />
            <RampSwatch name="950" className="bg-primary-950" />
          </div>

          <SubLabel>
            <span className="mt-8 block">Neutral ramp</span>
          </SubLabel>
          <div className="flex gap-1.5">
            <RampSwatch name="50" className="bg-neutral-50" />
            <RampSwatch name="100" className="bg-neutral-100" />
            <RampSwatch name="200" className="bg-neutral-200" />
            <RampSwatch name="300" className="bg-neutral-300" />
            <RampSwatch name="400" className="bg-neutral-400" />
            <RampSwatch name="500" className="bg-neutral-500" />
            <RampSwatch name="600" className="bg-neutral-600" />
            <RampSwatch name="700" className="bg-neutral-700" />
            <RampSwatch name="800" className="bg-neutral-800" />
            <RampSwatch name="900" className="bg-neutral-900" />
            <RampSwatch name="950" className="bg-neutral-950" />
          </div>
        </Section>

        {/* ------------------------------------------------------------ Typography */}
        <Section
          id="typography"
          title="Typography"
          description="One family (Geist, or the locale-appropriate script) at a small set of deliberate sizes — display down to label."
        >
          <div className="divide-y divide-border/60">
            {[
              { cls: "text-display", name: "Display", meta: "56 / 1.05 / -0.02em / 600" },
              { cls: "text-h1", name: "Heading 1", meta: "44 / 1.1 / -0.015em / 600" },
              { cls: "text-h2", name: "Heading 2", meta: "34 / 1.15 / -0.01em / 600" },
              { cls: "text-h3", name: "Heading 3", meta: "26 / 1.25 / -0.005em / 600" },
              { cls: "text-h4", name: "Heading 4", meta: "20 / 1.35 / 600" },
              { cls: "text-body-lg", name: "Body large", meta: "18 / 1.6 / 400" },
              { cls: "text-body", name: "Body", meta: "16 / 1.65 / 400" },
              { cls: "text-body-sm", name: "Body small", meta: "14 / 1.55 / 400" },
              { cls: "text-label", name: "Label", meta: "13 / 1.3 / 500" },
              { cls: "text-caption", name: "Caption", meta: "12 / 1.4 / 400" },
            ].map((row) => (
              <div key={row.cls} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <div className="flex shrink-0 flex-col sm:w-40">
                  <span className="text-body-sm font-medium">{row.name}</span>
                  <span className="font-mono text-caption text-muted-foreground">{row.meta}</span>
                </div>
                <p className={row.cls}>Deutsch lernen, klar erklärt.</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- Spacing */}
        <Section
          id="spacing"
          title="Spacing"
          description="Tailwind's 4px base scale, used consistently for gaps, padding, and section rhythm."
        >
          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((step) => (
              <div key={step} className="flex items-center gap-4">
                <span className="w-12 shrink-0 font-mono text-caption text-muted-foreground">
                  {step * 4}px
                </span>
                <div className="h-3 rounded-sm bg-primary" style={{ width: `${step * 4}px` }} />
              </div>
            ))}
          </div>
        </Section>

        {/* ----------------------------------------------------------------- Radius */}
        <Section
          id="radius"
          title="Radius"
          description="A single base radius (12px) scaled up and down — rounded enough to feel soft, never gimmicky."
        >
          <div className="flex flex-wrap gap-4">
            {[
              ["xs", "rounded-xs"],
              ["sm", "rounded-sm"],
              ["md", "rounded-md"],
              ["lg", "rounded-lg"],
              ["xl", "rounded-xl"],
              ["2xl", "rounded-2xl"],
              ["3xl", "rounded-3xl"],
              ["4xl", "rounded-4xl"],
              ["full", "rounded-full"],
            ].map(([name, cls]) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className={`size-16 bg-primary/15 ring-1 ring-primary/30 ${cls}`} />
                <span className="font-mono text-caption text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- Shadows */}
        <Section
          id="shadows"
          title="Shadows"
          description="Two-layer, low-contrast shadows — a tight contact shadow plus a wide ambient glow. Elevation communicates hierarchy, not decoration."
        >
          <div className="grid grid-cols-2 gap-8 rounded-2xl bg-surface p-8 sm:grid-cols-4">
            {[
              ["2xs", "shadow-2xs"],
              ["xs", "shadow-xs"],
              ["sm", "shadow-sm"],
              ["md", "shadow-md"],
              ["lg", "shadow-lg"],
              ["xl", "shadow-xl"],
              ["2xl", "shadow-2xl"],
            ].map(([name, cls]) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div className={`size-16 rounded-xl bg-card ${cls}`} />
                <span className="font-mono text-caption text-muted-foreground">shadow-{name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------------ Icons */}
        <Section
          id="icons"
          title="Icons"
          description="Lucide, at 16 / 20 / 24px with a 2px stroke. Icons never carry meaning alone — always paired with a label or accessible name."
        >
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {ICONS.map(([name, Icon]) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card py-4"
              >
                <Icon className="size-5" strokeWidth={2} />
                <span className="text-caption text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- Buttons */}
        <Section id="buttons" title="Buttons" description="Six variants, five sizes, one motion language.">
          <SubLabel>Variants</SubLabel>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>

          <SubLabel>
            <span className="mt-8 block">Sizes</span>
          </SubLabel>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Search">
              <Search />
            </Button>
          </div>

          <SubLabel>
            <span className="mt-8 block">States</span>
          </SubLabel>
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled</Button>
            <Button onClick={() => setLoading((v) => !v)} disabled={loading}>
              {loading && <Loader2 className="animate-spin" />}
              {loading ? "Loading" : "Click to load"}
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#buttons">With render (anchor)</a>}
            />
          </div>
        </Section>

        {/* ----------------------------------------------------------------- Inputs */}
        <Section
          id="inputs"
          title="Inputs"
          description="Consistent 8px-grid controls with a shared focus ring, and one place — Field — for label, description, and error states."
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-6">
              <Field>
                <FieldLabel htmlFor="sg-name">Display name</FieldLabel>
                <Input id="sg-name" placeholder="Anna Schmidt" />
                <FieldDescription>Shown on your dashboard and quiz history.</FieldDescription>
              </Field>

              <Field data-invalid="true">
                <FieldLabel htmlFor="sg-email">Email</FieldLabel>
                <Input id="sg-email" defaultValue="not-an-email" aria-invalid />
                <FieldError>Enter a valid email address.</FieldError>
              </Field>

              <InputGroup>
                <InputGroupAddon>
                  <Search className="size-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search a German word…" />
                <InputGroupAddon align="inline-end">
                  <Kbd>⌘K</Kbd>
                </InputGroupAddon>
              </InputGroup>

              <Field>
                <FieldLabel htmlFor="sg-note">Notes</FieldLabel>
                <Textarea id="sg-note" placeholder="Add a note to this word…" rows={3} />
              </Field>
            </div>

            <div className="space-y-6">
              <Field>
                <FieldLabel htmlFor="sg-level">Target level</FieldLabel>
                <Select defaultValue="b1">
                  <SelectTrigger id="sg-level" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cefrLevels.map((level) => (
                      <SelectItem key={level} value={level.toLowerCase()}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field orientation="horizontal">
                <FieldContent>
                  <FieldLabel htmlFor="sg-switch">Email reminders</FieldLabel>
                  <FieldDescription>A nudge if you haven&apos;t practiced in a while.</FieldDescription>
                </FieldContent>
                <Switch id="sg-switch" defaultChecked />
              </Field>

              <div className="flex items-center gap-2">
                <Checkbox id="sg-check" defaultChecked />
                <Label htmlFor="sg-check">I want tips on false friends</Label>
              </div>

              <RadioGroup defaultValue="der" className="flex gap-4">
                {["der", "die", "das"].map((g) => (
                  <div key={g} className="flex items-center gap-2">
                    <RadioGroupItem id={`sg-${g}`} value={g} />
                    <Label htmlFor={`sg-${g}`}>{g}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </Section>

        {/* ------------------------------------------------------------------ Cards */}
        <Section id="cards" title="Cards" description="A resting card, an interactive card, and a stat tile — the same surface, three jobs.">
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Resting card</CardTitle>
                <CardDescription>Static content, no affordance to interact.</CardDescription>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                Used for informational groupings — a summary, a settings block.
              </CardContent>
            </Card>

            <Card interactive>
              <CardHeader>
                <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <BookOpenText className="size-4.5" />
                </span>
                <CardTitle className="mt-2">Der, die, das</CardTitle>
                <CardDescription>Grammar · A1</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-body-sm text-muted-foreground">
                Interactive — lifts on hover
                <ChevronRight className="size-4" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-1 pt-1">
                <span className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
                  <Flame className="size-4 text-warning" />
                  Day streak
                </span>
                <p className="text-h2 tabular-nums">12</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* ------------------------------------------------------------- Navigation */}
        <Section
          id="navigation"
          title="Navigation"
          description="Tabs for switching within a page, breadcrumbs for depth, a command palette for going anywhere fast."
        >
          <SubLabel>Tabs</SubLabel>
          <Tabs defaultValue="simple">
            <TabsList>
              <TabsTrigger value="simple">Simple</TabsTrigger>
              <TabsTrigger value="detailed">Detailed</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="simple" className="text-body-sm text-muted-foreground">
              A short explanation, for the moment you need it.
            </TabsContent>
            <TabsContent value="detailed" className="text-body-sm text-muted-foreground">
              The full grammatical explanation, for later.
            </TabsContent>
            <TabsContent value="examples" className="text-body-sm text-muted-foreground">
              Real sentences, with translations.
            </TabsContent>
          </Tabs>

          <SubLabel>
            <span className="mt-8 block">Breadcrumb</span>
          </SubLabel>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#navigation">Grammar</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#navigation">Cases</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Accusative</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <SubLabel>
            <span className="mt-8 block">Command palette trigger</span>
          </SubLabel>
          <button
            type="button"
            className="flex w-full max-w-sm items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-body-sm text-muted-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <CommandIcon className="size-4" />
            Search everything…
            <Kbd className="ms-auto">⌘K</Kbd>
          </button>
        </Section>

        {/* ---------------------------------------------------------------- Motion */}
        <Section
          id="motion"
          title="Motion"
          description="Fast for feedback (150ms), base for reveals (300ms), a signature ease-out curve — never bouncy, never slow enough to feel laggy."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-body-sm font-medium">Hover lift</p>
              <Card interactive className="mt-3 p-4 text-body-sm text-muted-foreground">
                Hover me
              </Card>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-body-sm font-medium">Press feedback</p>
              <Button className="mt-3 w-full">Press me</Button>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-body-sm font-medium">Loading skeleton</p>
              <div className="mt-3 space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-3 w-3/5" />
              </div>
            </div>
          </div>
        </Section>

        {/* ----------------------------------------------------------- Breakpoints */}
        <Section
          id="breakpoints"
          title="Breakpoints"
          description="Mobile-first. Navigation collapses before content does; grids go 1 → 2 → 3–4 columns."
        >
          <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <table className="w-full text-body-sm">
              <thead className="bg-muted/60 text-start text-label text-muted-foreground">
                <tr>
                  <th className="px-4 py-2.5 text-start font-medium">Breakpoint</th>
                  <th className="px-4 py-2.5 text-start font-medium">Width</th>
                  <th className="px-4 py-2.5 text-start font-medium">Layout behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  ["Mobile", "< 640px", "Single column, nav in a slide-in sheet, stacked CTAs"],
                  ["sm", "640px", "Two-column feature grids, side-by-side CTAs"],
                  ["md", "768px", "Inline top navigation replaces the mobile menu"],
                  ["lg", "1024px", "Three–four column grids, sidebar navigation available"],
                  ["xl", "1280px", "Max content width (72rem) reached, extra whitespace grows"],
                ].map(([bp, width, note]) => (
                  <tr key={bp}>
                    <td className="px-4 py-2.5 font-medium">{bp}</td>
                    <td className="px-4 py-2.5 font-mono text-muted-foreground">{width}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </div>
  );
}

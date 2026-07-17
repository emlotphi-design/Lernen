import { Bot, User } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AiTeacherPreview({
  title,
  description,
  question,
  answer,
}: {
  title: string;
  description: string;
  question: string;
  answer: string;
}) {
  return (
    <Card className="grid gap-6 p-6 shadow-md sm:grid-cols-[1fr_1.3fr] sm:p-8">
      <div className="flex flex-col justify-center">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Bot className="size-5" />
        </span>
        <p className="mt-4 text-h4">{title}</p>
        <p className="mt-1.5 text-body-sm text-muted-foreground">{description}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-end gap-2">
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-body-sm text-primary-foreground">
            {question}
          </div>
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <User className="size-3.5" />
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Bot className="size-3.5" />
          </span>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5 text-body-sm">
            {answer}
          </div>
        </div>
      </div>
    </Card>
  );
}

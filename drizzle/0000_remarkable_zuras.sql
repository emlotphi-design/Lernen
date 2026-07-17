CREATE TYPE "public"."cefr_level" AS ENUM('A1', 'A2', 'B1', 'B2', 'C1', 'C2');--> statement-breakpoint
CREATE TYPE "public"."progress_status" AS ENUM('not_started', 'in_progress', 'completed');--> statement-breakpoint
CREATE TYPE "public"."quiz_question_type" AS ENUM('multiple_choice', 'fill_blank', 'sentence_order');--> statement-breakpoint
CREATE TYPE "public"."saved_entry_type" AS ENUM('word', 'grammar_topic', 'article');--> statement-breakpoint
CREATE TYPE "public"."vocab_category_kind" AS ENUM('level', 'topic');--> statement-breakpoint
CREATE TYPE "public"."word_gender" AS ENUM('der', 'die', 'das');--> statement-breakpoint
CREATE TYPE "public"."word_relation_kind" AS ENUM('synonym', 'antonym');--> statement-breakpoint
CREATE TABLE "profiles" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"display_name" text,
	"native_language" text,
	"target_level" "cefr_level",
	"avatar_url" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grammar_examples" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"topic_id" uuid NOT NULL,
	"sentence_de" text NOT NULL,
	"translation" jsonb NOT NULL,
	"note" text,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grammar_exceptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"topic_id" uuid NOT NULL,
	"description" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grammar_mistakes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"topic_id" uuid NOT NULL,
	"mistake" text NOT NULL,
	"correction" text NOT NULL,
	"explanation" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grammar_topics" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"category" text NOT NULL,
	"cefr_level" "cefr_level" NOT NULL,
	"title" jsonb NOT NULL,
	"simple_explanation" jsonb,
	"mdx_path" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"icon" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "grammar_topics_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "dictionary_entries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"word_de" text NOT NULL,
	"part_of_speech" text NOT NULL,
	"gender" "word_gender",
	"plural_form" text,
	"ipa_pronunciation" text,
	"audio_url" text,
	"cefr_level" "cefr_level" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "dictionary_relations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entry_id" uuid NOT NULL,
	"related_entry_id" uuid NOT NULL,
	"kind" "word_relation_kind" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "dictionary_translations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entry_id" uuid NOT NULL,
	"locale" text NOT NULL,
	"meaning" text NOT NULL,
	"example_sentence" text
);
--> statement-breakpoint
CREATE TABLE "verb_conjugations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entry_id" uuid NOT NULL,
	"tense" text NOT NULL,
	"pronoun" text NOT NULL,
	"form" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vocab_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"kind" "vocab_category_kind" NOT NULL,
	"name" jsonb NOT NULL,
	"icon" text,
	CONSTRAINT "vocab_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "vocab_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entry_id" uuid NOT NULL,
	"category_id" uuid NOT NULL,
	"cefr_level" "cefr_level" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "quiz_attempts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"quiz_id" uuid NOT NULL,
	"score" integer NOT NULL,
	"total" integer NOT NULL,
	"answers" jsonb NOT NULL,
	"completed_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "quiz_questions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"quiz_id" uuid NOT NULL,
	"type" "quiz_question_type" NOT NULL,
	"prompt" jsonb NOT NULL,
	"options" jsonb,
	"correct_answer" jsonb NOT NULL,
	"explanation" jsonb,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "quizzes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"grammar_topic_id" uuid,
	"vocab_category_id" uuid,
	"title" jsonb NOT NULL,
	"cefr_level" "cefr_level" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_favorites" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"entry_type" "saved_entry_type" NOT NULL,
	"entry_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"entry_type" "saved_entry_type" NOT NULL,
	"entry_id" uuid NOT NULL,
	"status" "progress_status" DEFAULT 'not_started' NOT NULL,
	"last_accessed_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "articles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"title" jsonb NOT NULL,
	"mdx_path" text NOT NULL,
	"published_at" timestamp with time zone,
	CONSTRAINT "articles_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grammar_examples" ADD CONSTRAINT "grammar_examples_topic_id_grammar_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."grammar_topics"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grammar_exceptions" ADD CONSTRAINT "grammar_exceptions_topic_id_grammar_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."grammar_topics"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grammar_mistakes" ADD CONSTRAINT "grammar_mistakes_topic_id_grammar_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."grammar_topics"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "dictionary_relations" ADD CONSTRAINT "dictionary_relations_entry_id_dictionary_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."dictionary_entries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "dictionary_relations" ADD CONSTRAINT "dictionary_relations_related_entry_id_dictionary_entries_id_fk" FOREIGN KEY ("related_entry_id") REFERENCES "public"."dictionary_entries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "dictionary_translations" ADD CONSTRAINT "dictionary_translations_entry_id_dictionary_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."dictionary_entries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "verb_conjugations" ADD CONSTRAINT "verb_conjugations_entry_id_dictionary_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."dictionary_entries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vocab_items" ADD CONSTRAINT "vocab_items_entry_id_dictionary_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."dictionary_entries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vocab_items" ADD CONSTRAINT "vocab_items_category_id_vocab_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."vocab_categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_quiz_id_quizzes_id_fk" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_questions" ADD CONSTRAINT "quiz_questions_quiz_id_quizzes_id_fk" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_grammar_topic_id_grammar_topics_id_fk" FOREIGN KEY ("grammar_topic_id") REFERENCES "public"."grammar_topics"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_vocab_category_id_vocab_categories_id_fk" FOREIGN KEY ("vocab_category_id") REFERENCES "public"."vocab_categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_favorites" ADD CONSTRAINT "user_favorites_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
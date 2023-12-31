export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Answers: {
        Row: {
          anonymous: boolean
          answer: string
          created_at: string | null
          id: number
          question: number
          user: string
        }
        Insert: {
          anonymous: boolean
          answer: string
          created_at?: string | null
          id?: number
          question: number
          user: string
        }
        Update: {
          anonymous?: boolean
          answer?: string
          created_at?: string | null
          id?: number
          question?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "Answers_question_fkey"
            columns: ["question"]
            referencedRelation: "Questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Answers_user_fkey"
            columns: ["user"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Likes: {
        Row: {
          answer: number
          created_at: string | null
          id: number
          user: string
        }
        Insert: {
          answer: number
          created_at?: string | null
          id?: number
          user: string
        }
        Update: {
          answer?: number
          created_at?: string | null
          id?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "Likes_answer_fkey"
            columns: ["answer"]
            referencedRelation: "Answers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Likes_user_fkey"
            columns: ["user"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Questions: {
        Row: {
          created_at: string | null
          day: string
          id: number
          main: boolean
          question: string
        }
        Insert: {
          created_at?: string | null
          day?: string
          id?: number
          main?: boolean
          question: string
        }
        Update: {
          created_at?: string | null
          day?: string
          id?: number
          main?: boolean
          question?: string
        }
        Relationships: []
      }
      Users: {
        Row: {
          age: number
          created_at: string | null
          email: string | null
          id: string
          name: string
          username: string
        }
        Insert: {
          age: number
          created_at?: string | null
          email?: string | null
          id: string
          name: string
          username?: string
        }
        Update: {
          age?: number
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "Users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

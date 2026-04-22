import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// In production you'd replace this with a real DB (Supabase, PostgreSQL, etc.)
// For the assignment this persists leads to a JSON file at /tmp/leads.json
// and also logs them to the console.

type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message?: string;
  submittedAt: string;
};

function getLeadsFilePath() {
  // Use /tmp for Vercel serverless compatibility
  return path.join("/tmp", "leads.json");
}

function readLeads(): Lead[] {
  try {
    const file = getLeadsFilePath();
    if (!fs.existsSync(file)) return [];
    const raw = fs.readFileSync(file, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeLeads(leads: Lead[]) {
  const file = getLeadsFilePath();
  fs.writeFileSync(file, JSON.stringify(leads, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize, message } = body;

    // Basic server-side validation
    if (!name || !email || !company || !teamSize) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      teamSize,
      message: message?.trim() || "",
      submittedAt: new Date().toISOString(),
    };

    // Persist to file (replace with DB in production)
    const existing = readLeads();
    writeLeads([...existing, lead]);

    // Log for visibility
    console.log("[ContactForm] New lead:", JSON.stringify(lead, null, 2));

    return NextResponse.json(
      { success: true, message: "Lead captured successfully", id: lead.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[ContactForm] Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all leads (for admin/demo purposes)
export async function GET() {
  try {
    const leads = readLeads();
    return NextResponse.json({ count: leads.length, leads }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Could not read leads" }, { status: 500 });
  }
}

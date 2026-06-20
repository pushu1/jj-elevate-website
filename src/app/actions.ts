"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --- LEADS ---
export async function createLead(data: any) {
  try {
    await prisma.lead.create({
      data: {
        name: data.name || "Subscriber",
        email: data.email,
        company: data.company,
        service: data.service || "Newsletter",
        budget: data.budget,
        message: data.message || "Subscribed.",
        type: data.type || "Contact Form",
      },
    });
    revalidatePath("/admin/leads");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false, error: "Failed to create lead" };
  }
}

export async function getLeads() {
  try {
    return await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function deleteLead(id: string) {
  try {
    await prisma.lead.delete({ where: { id } });
    revalidatePath("/admin/leads");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
}

// --- CASE STUDIES ---
export async function createCaseStudy(data: any) {
  try {
    await prisma.caseStudy.create({ data });
    revalidatePath("/admin/portfolio");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
}

export async function getCaseStudies() {
  try {
    return await prisma.caseStudy.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.error(e);
    return [];
  }
}

// --- POSTS ---
export async function createPost(data: any) {
  try {
    await prisma.post.create({ data });
    revalidatePath("/admin/blogs");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
}

export async function getPosts() {
  try {
    return await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.error(e);
    return [];
  }
}

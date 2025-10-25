import { CustomObject } from "@/types/custom";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getParams(values: CustomObject = {}): CustomObject {
    return {
        ...values,
        ...(values.limit && { limit: values.limit }),
        ...(values.size && { size: values.size }),
        ...(values.page && { page: values.page }),
        ...(values.name && { name: values.name }),
        ...(values.from && { from: values.from }),
        ...(values.to && { to: values.to }),
        ...(values.search && { search: values.search }),
        ...(values.year && { year: values.year }),
        ...(values.class && { class: values.class }),
        ...(values.term && { term: values.term }),
        ...(values.status && { status: values.status }),
        ...(values.department && { department: values.department }),
        ...(values.campus && { campus: values.campus }),
        ...(values.gender && { gender: values.gender }),
        ...(values.nationality && { nationality: values.nationality })
        
    };
}
import {UserProfile} from "./User"

export interface ImageRef {
    file: File;
    url: string;
}
  
export interface CommissionFormData {
    title: string;
    description: string;
    artType: string;
    deadline: string;
    budget: string;
  }

export interface FinalCommissionData extends CommissionFormData {
    commissionTo?: UserProfile;
    commissionFrom?: UserProfile;
    tags: string[];
    images: ImageRef[];
    createdAt: string;
}
  
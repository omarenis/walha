import {User} from "./user";
import {Participation} from "./participation";
import {Certification} from "./certification";
import {Internship} from "./internship";
import {Competition} from "./competition";

export interface Student extends User{
	about: string;
	description: string;
	firstname: string;
	lastname: string;
	participationList ?: Participation[];
	certifications?: Certification[];
	internships ?: Internship[];
	competitions?: Competition[];
}

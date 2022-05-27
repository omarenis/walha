import {Participation} from "./participation";
import {Localisation} from "./localisation";
import {Certification} from "./certification";
import {Competence} from "./competence";

export interface User {
	email: string;
	telephone: string;
	username: string;
	dateJoined: Date;
	localisation: Localisation;
	address: string;
	id ?: number;
}

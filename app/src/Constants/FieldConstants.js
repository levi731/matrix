import { YearsList } from "../services/listServices"

export const NamingConstants = {
    text: "text",
    email: "email",
    dropDown: "dropDown",
    radio: "radio",
    checkBox: "checkBox",
    textArea:"textArea",
    date:"date"
}

export const FieldConstants = {
    SignUp: {
        jobTypeList: [{
            jobTypeId: "001",
            value: 'Student',
            name: "jobTypeId"
        },
        {
            jobTypeId: "002",
            value: 'College',
            name: "jobTypeId"
        },
        {
            jobTypeId: "003",
            value: 'Company',
            name: "jobTypeId"
        },
        ],
        renderFields: {
            Student: {
                studentName: {
                    type: NamingConstants.text,
                    label: "Student Name",
                    name: "studentName",
                    fieldsize: 4,
                    className: 'Col-Div',
                    required:true
                },
                studentFatherName: {
                    type: NamingConstants.text,
                    label: "Student Father Name",
                    name: "studentFatherName",
                    fieldsize: 4,
                    className: 'Col-Div',
                    required:true
                },
                YearOfPassing: {
                    type: NamingConstants.dropDown,
                    label: "Year Of Passing",
                    name: "yearOfPassingId",
                    fieldsize: 4,
                    className: "Col-Div",
                    list: YearsList("yearOfPassingId"),
                    placeholder:"Select Year",
                    required:true
                },
            },
            College: {
                collegeName: {
                    type: NamingConstants.text,
                    label: "College Name",
                    name: "collegeName",
                    fieldsize: 4,
                    className: 'Col-Div',
                    required:true
                },
                collegeEmail: {
                    type: NamingConstants.email,
                    label: "College Email",
                    name: "collegeEmail",
                    fieldsize: 4,
                    className: 'Col-Div',
                    required:true
                },
                collegeRemarks:{
                    type: NamingConstants.textArea,
                    label: "College Remarks",
                    name:"collegeRemarks",
                    fieldsize: 6,
                    className: "Col-Div",
                    rows: 1,
                    required:true
                }
            },
            Company: {
                companyName: {
                    type: NamingConstants.text,
                    label: "Company Name",
                    name: "companyName",
                    fieldsize: 4,
                    className: 'Col-Div',
                    required:true
                },
                companyCode: {
                    type: NamingConstants.text,
                    label: "Company Code",
                    name: "companyCode",
                    fieldsize: 4,
                    className: 'Col-Div',
                    required:true
                },
                dateOfRegistration:{
                    type: NamingConstants.date,
                    label: "Date Of Registration",
                    name: "dateOfRegistration",
                    fieldsize: 4,
                    className: 'Col-Div',
                    required:true
                }
            }
        }
    }
}



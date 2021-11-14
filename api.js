const ApiDriver = require("./driver.js");

const API_HOST = "api.okkoala.com";

module.exports = class API {
    
    constructor() {
        this._driver = new ApiDriver({ host: API_HOST });
    }
    
    AcceptTermsOfUse() {
        let url = this._driver.opaqueURL("/users/accept-terms-of-use");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ActivateMFAInput = ["token"];
    ActivateMFA({ token }) {
        let url = this._driver.opaqueURL("/users/mfa");
        return this._driver.sendPost({
            data: { token },
            endpoint: url.toString(),
        });
    }

    AddCodeInput = ["id", "value", "validTo"];
    AddCode({ id, value, validTo }) {
        let url = this._driver.opaqueURL("/codes");
        return this._driver.sendPost({
            data: { id, value, validTo },
            endpoint: url.toString(),
        });
    }

    AddDataRecordInput = ["last_name", "first_name", "email", "type"];
    AddDataRecord({ last_name, first_name, email, type }) {
        let url = this._driver.opaqueURL("/data");
        return this._driver.sendPost({
            data: { last_name, first_name, email, type },
            endpoint: url.toString(),
        });
    }

    AddTitleToSupportTicketInput = ["id_support_ticket", "title"];
    AddTitleToSupportTicket({ id_support_ticket, title }) {
        let url = this._driver.opaqueURL("/support-tickets/title");
        return this._driver.sendPut({
            data: { id_support_ticket, title },
            endpoint: url.toString(),
        });
    }

    AppSettingsChangingAuditSettingsInput = ["ACCEPTING", "FIRST_PHASE", "SECOND_PHASE", "THIRD_PHASE", "SLEEP_TIME", "TESTING", "WAITING_FOR_RESULTS", "REPORT", "FINAL_TEMPLATE_ID"];
    AppSettingsChangingAuditSettings({ ACCEPTING, FIRST_PHASE, SECOND_PHASE, THIRD_PHASE, SLEEP_TIME, TESTING, WAITING_FOR_RESULTS, REPORT, FINAL_TEMPLATE_ID }) {
        let url = this._driver.opaqueURL("/app-settings/audit");
        return this._driver.sendPost({
            data: { ACCEPTING, FIRST_PHASE, SECOND_PHASE, THIRD_PHASE, SLEEP_TIME, TESTING, WAITING_FOR_RESULTS, REPORT, FINAL_TEMPLATE_ID },
            endpoint: url.toString(),
        });
    }

    ArchiveAuditInput = ["id_audit", "archived"];
    ArchiveAudit({ id_audit, archived }) {
        let url = this._driver.opaqueURL("/audits/archive");
        return this._driver.sendPost({
            data: { id_audit, archived },
            endpoint: url.toString(),
        });
    }

    AssetsServiceUploadInput = ["name", "type"];
    AssetsServiceUpload({ name, type }) {
        let url = this._driver.opaqueURL("/assets/upload");
        return this._driver.sendPost({
            data: { name, type },
            endpoint: url.toString(),
        });
    }

    AssignCourseToIdentityInput = ["id_identity", "id_course"];
    AssignCourseToIdentity({ id_identity, id_course }) {
        let url = this._driver.opaqueURL("/courses/licenses/buy");
        return this._driver.sendPost({
            data: { id_identity, id_course },
            endpoint: url.toString(),
        });
    }

    AssignEmployeeToTagInput = ["id_data", "tag", "email", "id"];
    AssignEmployeeToTag({ id_data, tag, email, id }) {
        let url = this._driver.opaqueURL(["", "tags", encodeURIComponent(id)].join("/"));
        return this._driver.sendPost({
            data: { id_data, tag, email, id },
            endpoint: url.toString(),
        });
    }

    AttachReasonToTemplateInput = ["id_template", "id_reason"];
    AttachReasonToTemplate({ id_template, id_reason }) {
        let url = this._driver.opaqueURL("/reasons/attach");
        return this._driver.sendPost({
            data: { id_template, id_reason },
            endpoint: url.toString(),
        });
    }

    AuditTemplatesDb() {
        let url = this._driver.opaqueURL("/templates/audit/db");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    AuditTemplatesFiles(input) {
        let url = this._driver.opaqueURL("/templates/audit/files");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    AuthOutlookAddinInput = ["bootstrapToken"];
    AuthOutlookAddin({ bootstrapToken }) {
        let url = this._driver.opaqueURL("/auth/office");
        return this._driver.sendPost({
            data: { bootstrapToken },
            endpoint: url.toString(),
        });
    }

    AzureActiveDirectorySync() {
        let url = this._driver.opaqueURL("/azure-active-directory-sync");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    AzureActiveDirectorySyncNow(input) {
        let url = this._driver.opaqueURL("/azure-active-directory-sync-now");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    AzureActiveDirectorySyncProfile(input) {
        let url = this._driver.opaqueURL("/azure-active-directory-sync");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    AzureLoginForTeams() {
        let url = this._driver.opaqueURL("/auth/teams");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    AzureLoginForWebsite() {
        let url = this._driver.opaqueURL("/auth/azure");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    BillingGetDownloadUrlAsModeratorInput = ["id_billing", "id"];
    BillingGetDownloadUrlAsModerator({ id_billing, id }) {
        let url = this._driver.opaqueURL("/billings/download/mod");
        return this._driver.sendPost({
            data: { id_billing, id },
            endpoint: url.toString(),
        });
    }

    BillingGetDownloadUrlAsUserInput = ["id"];
    BillingGetDownloadUrlAsUser({ id }) {
        let url = this._driver.opaqueURL("/billings/download");
        return this._driver.sendPost({
            data: { id },
            endpoint: url.toString(),
        });
    }

    BillingGetUploadUrlInput = ["key", "id_billing", "extension", "contentType"];
    BillingGetUploadUrl({ key, id_billing, extension, contentType }) {
        let url = this._driver.opaqueURL("/billings/upload");
        return this._driver.sendPost({
            data: { key, id_billing, extension, contentType },
            endpoint: url.toString(),
        });
    }

    CanChangeDealStateInput = ["state", "target_state"];
    CanChangeDealState({ state, target_state }) {
        let url = this._driver.opaqueURL("/deals/change-account-type");
        return this._driver.sendPost({
            data: { state, target_state },
            endpoint: url.toString(),
        });
    }

    ChangeAccountTypeInput = ["id_user", "user_role", "id_identity"];
    ChangeAccountType({ id_user, user_role, id_identity }) {
        let url = this._driver.opaqueURL("/users/account-mode");
        return this._driver.sendPut({
            data: { id_user, user_role, id_identity },
            endpoint: url.toString(),
        });
    }

    ChangeBillingPayStatusInput = ["payed", "id_billing", "id"];
    ChangeBillingPayStatus({ payed, id_billing, id }) {
        let url = this._driver.opaqueURL(["", "billings", "users", encodeURIComponent(id), "payed"].join("/"));
        return this._driver.sendPut({
            data: { payed, id_billing, id },
            endpoint: url.toString(),
        });
    }

    CheckCodeInput = ["id"];
    CheckCode({ id }) {
        let url = this._driver.opaqueURL(["", "codes", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CloseSupportTicketInput = ["id_support_ticket", "title"];
    CloseSupportTicket({ id_support_ticket, title }) {
        let url = this._driver.opaqueURL("/support-tickets/close");
        return this._driver.sendPut({
            data: { id_support_ticket, title },
            endpoint: url.toString(),
        });
    }

    CompanyQuizActivityReport() {
        let url = this._driver.opaqueURL("/company/users/report/c");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CompanyUsersReportA() {
        let url = this._driver.opaqueURL("/company/users/report/a");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CompanyUsersReportB() {
        let url = this._driver.opaqueURL("/company/users/report/b");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CompleteTaskInput = ["id_mission", "id_template", "answer"];
    CompleteTask({ id_mission, id_template, answer }) {
        let url = this._driver.opaqueURL("/missions/complete");
        return this._driver.sendPost({
            data: { id_mission, id_template, answer },
            endpoint: url.toString(),
        });
    }

    ConsumeOrderInput = ["id", "consumed"];
    ConsumeOrder({ id, consumed }) {
        let url = this._driver.opaqueURL("/orders");
        return this._driver.sendPut({
            data: { id, consumed },
            endpoint: url.toString(),
        });
    }

    ConsumeQuestionInput = ["id", "consumed"];
    ConsumeQuestion({ id, consumed }) {
        let url = this._driver.opaqueURL("/questions");
        return this._driver.sendPut({
            data: { id, consumed },
            endpoint: url.toString(),
        });
    }

    ContactInput = ["email", "ms_teams", "question", "rodo", "token"];
    Contact({ email, ms_teams, question, rodo, token }) {
        let url = this._driver.opaqueURL("/contact");
        return this._driver.sendPost({
            data: { email, ms_teams, question, rodo, token },
            endpoint: url.toString(),
        });
    }

    CountEmployeesOfCompany() {
        let url = this._driver.opaqueURL("/data/count-by-company");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CountTempleteQueuesInput = ["payed", "id_billing"];
    CountTempleteQueues({ payed, id_billing }) {
        let url = this._driver.opaqueURL("/template-queue/count");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CourseByIdInput = ["id"];
    CourseById({ id }) {
        let url = this._driver.opaqueURL(["", "courses", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CoursesAvailableForCompanyInput = ["id"];
    CoursesAvailableForCompany({ id }) {
        let url = this._driver.opaqueURL(["", "courses", "available", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CreateAgreementInput = ["id", "value", "agreement_date", "acceptance_date"];
    CreateAgreement({ id, value, agreement_date, acceptance_date }) {
        let url = this._driver.opaqueURL("/agreements");
        return this._driver.sendPost({
            data: { id, value, agreement_date, acceptance_date },
            endpoint: url.toString(),
        });
    }

    CreateAudit(input) {
        let url = this._driver.opaqueURL("/audits");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreateCertInput = ["id_data", "first_name", "last_name", "email"];
    CreateCert({ id_data, first_name, last_name, email }) {
        let url = this._driver.opaqueURL("/me/certs");
        return this._driver.sendPost({
            data: { id_data, first_name, last_name, email },
            endpoint: url.toString(),
        });
    }

    CreateCompanyAsModeratorInput = ["name", "type"];
    CreateCompanyAsModerator({ name, type }) {
        let url = this._driver.opaqueURL("/company");
        return this._driver.sendPost({
            data: { name, type },
            endpoint: url.toString(),
        });
    }

    CreateCountryInput = ["isocode"];
    CreateCountry({ isocode }) {
        let url = this._driver.opaqueURL("/countries");
        return this._driver.sendPost({
            data: { isocode },
            endpoint: url.toString(),
        });
    }

    CreateCourseInput = ["isocode"];
    CreateCourse({ isocode }) {
        let url = this._driver.opaqueURL("/courses");
        return this._driver.sendPost({
            data: { isocode },
            endpoint: url.toString(),
        });
    }

    CreateDeal(input) {
        let url = this._driver.opaqueURL("/partner/deal");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreateDealPDF() {
        let url = this._driver.opaqueURL("/deals/pdf");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CreateFaqInput = ["query", "answer", "lang"];
    CreateFaq({ query, answer, lang }) {
        let url = this._driver.opaqueURL("/faq");
        return this._driver.sendPost({
            data: { query, answer, lang },
            endpoint: url.toString(),
        });
    }

    CreateFlowInput = ["name", "name_pl", "description", "description_pl"];
    CreateFlow({ name, name_pl, description, description_pl }) {
        let url = this._driver.opaqueURL("/flow");
        return this._driver.sendPost({
            data: { name, name_pl, description, description_pl },
            endpoint: url.toString(),
        });
    }

    CreateFlowItem(input) {
        let url = this._driver.opaqueURL("/flow/items");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreateLeadInput = ["email", "checked"];
    CreateLead({ email, checked }) {
        let url = this._driver.opaqueURL("/leads");
        return this._driver.sendPost({
            data: { email, checked },
            endpoint: url.toString(),
        });
    }

    CreateMFAInput = ["query", "answer"];
    CreateMFA({ query, answer }) {
        let url = this._driver.opaqueURL("/users/mfa");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    CreateMissionAsModeratorInput = ["id_category", "id_template", "id_template_pl", "title", "title_pl", "value", "type", "answer"];
    CreateMissionAsModerator({ id_category, id_template, id_template_pl, title, title_pl, value, type, answer }) {
        let url = this._driver.opaqueURL("/missions");
        return this._driver.sendPost({
            data: { id_category, id_template, id_template_pl, title, title_pl, value, type, answer },
            endpoint: url.toString(),
        });
    }

    CreateMissionCategoryAsModeratorInput = ["name", "name_pl"];
    CreateMissionCategoryAsModerator({ name, name_pl }) {
        let url = this._driver.opaqueURL("/mission-categories");
        return this._driver.sendPost({
            data: { name, name_pl },
            endpoint: url.toString(),
        });
    }

    CreateOrderInput = ["name", "address", "nip", "regon", "who", "email", "phone_number", "token"];
    CreateOrder({ name, address, nip, regon, who, email, phone_number, token }) {
        let url = this._driver.opaqueURL("/orders");
        return this._driver.sendPost({
            data: { name, address, nip, regon, who, email, phone_number, token },
            endpoint: url.toString(),
        });
    }

    CreatePartnershipInput = ["email", "id_partner", "user_role"];
    CreatePartnership({ email, id_partner, user_role }) {
        let url = this._driver.opaqueURL("/partner/partnership");
        return this._driver.sendPost({
            data: { email, id_partner, user_role },
            endpoint: url.toString(),
        });
    }

    CreatePost(input) {
        let url = this._driver.opaqueURL("/posts");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreatePostComment(input) {
        let url = this._driver.opaqueURL("/posts-comments");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreatePostPageInput = ["name_pl", "name_en"];
    CreatePostPage({ name_pl, name_en }) {
        let url = this._driver.opaqueURL("/post-pages");
        return this._driver.sendPost({
            data: { name_pl, name_en },
            endpoint: url.toString(),
        });
    }

    CreatePostReactions(input) {
        let url = this._driver.opaqueURL("/posts-reactions");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreatePublicTemplateInput = ["id_category", "name", "sender_name", "based_on", "training_only", "lang", "story", "featured", "mjmlCode", "htmlCode", "id_identity", "is_public", "id_mail_transport", "trusted"];
    CreatePublicTemplate({ id_category, name, sender_name, based_on, training_only, lang, story, featured, mjmlCode, htmlCode, id_identity, is_public, id_mail_transport, trusted }) {
        let url = this._driver.opaqueURL("/templates/public");
        return this._driver.sendPost({
            data: { id_category, name, sender_name, based_on, training_only, lang, story, featured, mjmlCode, htmlCode, id_identity, is_public, id_mail_transport, trusted },
            endpoint: url.toString(),
        });
    }

    CreateQuestion(input) {
        let url = this._driver.opaqueURL("/questions");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreateQueueInput = ["query", "answer"];
    CreateQueue({ query, answer }) {
        let url = this._driver.opaqueURL("/queues");
        return this._driver.sendPost({
            data: { query, answer },
            endpoint: url.toString(),
        });
    }

    CreateQueueOnPerformInput = ["id", "id_template"];
    CreateQueueOnPerform({ id, id_template }) {
        let url = this._driver.opaqueURL("/queues/perform");
        return this._driver.sendPost({
            data: { id, id_template },
            endpoint: url.toString(),
        });
    }

    CreateQuizAnswerInput = ["id_post", "answer"];
    CreateQuizAnswer({ id_post, answer }) {
        let url = this._driver.opaqueURL("/posts/quiz-answer");
        return this._driver.sendPost({
            data: { id_post, answer },
            endpoint: url.toString(),
        });
    }

    CreateReactionInput = ["name", "value"];
    CreateReaction({ name, value }) {
        let url = this._driver.opaqueURL("/reactions");
        return this._driver.sendPost({
            data: { name, value },
            endpoint: url.toString(),
        });
    }

    CreateReasonInput = ["message", "message_pl"];
    CreateReason({ message, message_pl }) {
        let url = this._driver.opaqueURL("/reasons");
        return this._driver.sendPost({
            data: { message, message_pl },
            endpoint: url.toString(),
        });
    }

    CreateReportInput = ["name", "count", "avg_final_question", "avg_quiz_score", "minimum_started_at", "id"];
    CreateReport({ name, count, avg_final_question, avg_quiz_score, minimum_started_at, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "report"].join("/"));
        return this._driver.sendPost({
            data: { name, count, avg_final_question, avg_quiz_score, minimum_started_at, id },
            endpoint: url.toString(),
        });
    }

    CreateTagInput = ["name"];
    CreateTag({ name }) {
        let url = this._driver.opaqueURL("/tags");
        return this._driver.sendPost({
            data: { name },
            endpoint: url.toString(),
        });
    }

    CreateTemplate(input) {
        let url = this._driver.opaqueURL("/templates");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreateTemplateCategoryInput = ["name"];
    CreateTemplateCategory({ name }) {
        let url = this._driver.opaqueURL("/template-category");
        return this._driver.sendPost({
            data: { name },
            endpoint: url.toString(),
        });
    }

    CreateTrainingInput = ["id_audit", "id_data"];
    CreateTraining({ id_audit, id_data }) {
        let url = this._driver.opaqueURL("/trainings");
        return this._driver.sendPost({
            data: { id_audit, id_data },
            endpoint: url.toString(),
        });
    }

    CreateTransport(input) {
        let url = this._driver.opaqueURL("/transports");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    CreateUserInput = ["email", "source", "lang", "id_company", "first_name", "last_name"];
    CreateUser({ email, source, lang, id_company, first_name, last_name }) {
        let url = this._driver.opaqueURL("/users");
        return this._driver.sendPost({
            data: { email, source, lang, id_company, first_name, last_name },
            endpoint: url.toString(),
        });
    }

    CreateUserBillingInput = ["billingName", "dateValue", "id_aggrement", "id", "email", "payed", "id_identity"];
    CreateUserBilling({ billingName, dateValue, id_aggrement, id, email, payed, id_identity }) {
        let url = this._driver.opaqueURL(["", "billings", "users", encodeURIComponent(email)].join("/"));
        return this._driver.sendPost({
            data: { billingName, dateValue, id_aggrement, id, email, payed, id_identity },
            endpoint: url.toString(),
        });
    }

    DeleteAzureActiveDirectoryProfileInput = ["id_sync_profiles"];
    DeleteAzureActiveDirectoryProfile({ id_sync_profiles }) {
        let url = this._driver.opaqueURL("/azure-active-directory-sync");
        return this._driver.sendDelete({
            data: { id_sync_profiles },
            endpoint: url.toString(),
        });
    }

    DeleteComplainInput = ["isocode", "id"];
    DeleteComplain({ isocode, id }) {
        let url = this._driver.opaqueURL(["", "trainings", "complain", encodeURIComponent(id)].join("/"));
        return this._driver.sendDelete({
            data: { isocode, id },
            endpoint: url.toString(),
        });
    }

    DeleteCountryInput = ["isocode"];
    DeleteCountry({ isocode }) {
        let url = this._driver.opaqueURL("/countries");
        return this._driver.sendDelete({
            data: { isocode },
            endpoint: url.toString(),
        });
    }

    DeleteDetailRecordInput = ["email", "key"];
    DeleteDetailRecord({ email, key }) {
        let url = this._driver.opaqueURL("/data/details");
        return this._driver.sendDelete({
            data: { email, key },
            endpoint: url.toString(),
        });
    }

    DeleteFaqInput = ["query", "answer"];
    DeleteFaq({ query, answer }) {
        let url = this._driver.opaqueURL("/faq");
        return this._driver.sendPost({
            data: { query, answer },
            endpoint: url.toString(),
        });
    }

    DeleteMailTransport(input) {
        let url = this._driver.opaqueURL("/transports");
        return this._driver.sendDelete({
            data: input,
            endpoint: url.toString(),
        });
    }

    DeleteMineDomain(input) {
        let url = this._driver.opaqueURL("/domain-registration");
        return this._driver.sendDelete({
            data: input,
            endpoint: url.toString(),
        });
    }

    DeleteMissionCategoryAsModeratorInput = ["id"];
    DeleteMissionCategoryAsModerator({ id }) {
        let url = this._driver.opaqueURL("/mission-categories");
        return this._driver.sendDelete({
            data: { id },
            endpoint: url.toString(),
        });
    }

    DeletePartnershipInput = ["id_partnership", "id_partner"];
    DeletePartnership({ id_partnership, id_partner }) {
        let url = this._driver.opaqueURL("/partner/partnership");
        return this._driver.sendDelete({
            data: { id_partnership, id_partner },
            endpoint: url.toString(),
        });
    }

    DeletePost(input) {
        let url = this._driver.opaqueURL("/posts");
        return this._driver.sendDelete({
            data: input,
            endpoint: url.toString(),
        });
    }

    DeleteReasonInput = ["id"];
    DeleteReason({ id }) {
        let url = this._driver.opaqueURL("/orders");
        return this._driver.sendDelete({
            data: { id },
            endpoint: url.toString(),
        });
    }

    DeleteTagInput = ["id"];
    DeleteTag({ id }) {
        let url = this._driver.opaqueURL("/tags");
        return this._driver.sendDelete({
            data: { id },
            endpoint: url.toString(),
        });
    }

    DeleteTemplateInput = ["id"];
    DeleteTemplate({ id }) {
        let url = this._driver.opaqueURL("/templates");
        return this._driver.sendDelete({
            data: { id },
            endpoint: url.toString(),
        });
    }

    DeleteTemplateCategoryInput = ["isocode"];
    DeleteTemplateCategory({ isocode }) {
        let url = this._driver.opaqueURL("/template-category");
        return this._driver.sendDelete({
            data: { isocode },
            endpoint: url.toString(),
        });
    }

    DeleteTrainingInput = ["id_audit", "id_data"];
    DeleteTraining({ id_audit, id_data }) {
        let url = this._driver.opaqueURL("/trainings");
        return this._driver.sendDelete({
            data: { id_audit, id_data },
            endpoint: url.toString(),
        });
    }

    DetachCourseFromIdentityInput = ["id_identity", "id_course"];
    DetachCourseFromIdentity({ id_identity, id_course }) {
        let url = this._driver.opaqueURL("/courses/licenses/return");
        return this._driver.sendDelete({
            data: { id_identity, id_course },
            endpoint: url.toString(),
        });
    }

    DetachFromTemplateInput = ["id_template", "id_reason"];
    DetachFromTemplate({ id_template, id_reason }) {
        let url = this._driver.opaqueURL("/reasons/attach");
        return this._driver.sendDelete({
            data: { id_template, id_reason },
            endpoint: url.toString(),
        });
    }

    DownloadDealLetterInput = ["id"];
    DownloadDealLetter({ id }) {
        let url = this._driver.opaqueURL(["", "deals", encodeURIComponent(id), "pdf"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    DownloadHtmlContentInput = ["id"];
    DownloadHtmlContent({ id }) {
        let url = this._driver.opaqueURL(["", "templates", encodeURIComponent(id), "html"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    DownloadMjmlContentInput = ["id"];
    DownloadMjmlContent({ id }) {
        let url = this._driver.opaqueURL(["", "templates", encodeURIComponent(id), "mjml"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    DropEmailFromSandboxInput = ["id"];
    DropEmailFromSandbox({ id }) {
        let url = this._driver.opaqueURL("/sandbox/download-emails");
        return this._driver.sendDelete({
            data: { id },
            endpoint: url.toString(),
        });
    }

    EmpCoverageReport() {
        let url = this._driver.opaqueURL("/reports/emp-coverage");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    EmployeesAssignedToTagInput = ["id"];
    EmployeesAssignedToTag({ id }) {
        let url = this._driver.opaqueURL(["", "tags", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    EnableDevSupport(input) {
        let url = this._driver.opaqueURL("/users/me/developer");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    EndTrainingInput = ["id_data", "first_name", "last_name", "email"];
    EndTraining({ id_data, first_name, last_name, email }) {
        let url = this._driver.opaqueURL("/trainings/end-training");
        return this._driver.sendPost({
            data: { id_data, first_name, last_name, email },
            endpoint: url.toString(),
        });
    }

    EndTutorial(input) {
        let url = this._driver.opaqueURL("/trainings/tutorial/end");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    ExternalUserInput = ["id_identity"];
    ExternalUser({ id_identity }) {
        let url = this._driver.opaqueURL("/auth/external-user");
        return this._driver.sendPost({
            data: { id_identity },
            endpoint: url.toString(),
        });
    }

    GetAuditAgreementAsModeratorInput = ["user", "id"];
    GetAuditAgreementAsModerator({ user, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(user), encodeURIComponent(id), "agreement"].join("/"));
        if (user) url.searchParams.set("user", user);
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetAuditAgreementsInput = ["id"];
    GetAuditAgreements({ id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "agreement"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetAuditRecipeInput = ["id"];
    GetAuditRecipe({ id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "recipe"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetBillingsByIdInput = ["id"];
    GetBillingsById({ id }) {
        let url = this._driver.opaqueURL(["", "billings", "users", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetBucketConfiguration() {
        let url = this._driver.opaqueURL("/system/buckets");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetCertInput = ["id_data", "first_name", "last_name", "email"];
    GetCert({ id_data, first_name, last_name, email }) {
        let url = this._driver.opaqueURL("/certs");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetChangesOfDealInput = ["id_data", "first_name", "last_name", "email", "id"];
    GetChangesOfDeal({ id_data, first_name, last_name, email, id }) {
        let url = this._driver.opaqueURL(["", "partner", "deal-changes", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetCompanyName(input) {
        let url = this._driver.opaqueURL("/trainings/company");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    GetCustomUserUsedTrainings(input) {
        let url = this._driver.opaqueURL("/users/trainings-count-admin");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    GetDataPoolOfMyCompany() {
        let url = this._driver.opaqueURL("/company/data-pool");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetDealByIdInput = ["id"];
    GetDealById({ id }) {
        let url = this._driver.opaqueURL(["", "deals", encodeURIComponent(id), "data"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetDeveloperSupport() {
        let url = this._driver.opaqueURL("/users/me/developer");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetEmployeeData(input) {
        let url = this._driver.opaqueURL("/data/about-me");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    GetGlobalPricing() {
        let url = this._driver.opaqueURL("/pricing/global");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetIdentityForTraining() {
        let url = this._driver.opaqueURL("/trainings/start");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetInfoAboutTemplateInput = ["id"];
    GetInfoAboutTemplate({ id }) {
        let url = this._driver.opaqueURL(["", "templates", encodeURIComponent(id), "info"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetInfoAsAnEmployeeInput = ["id"];
    GetInfoAsAnEmployee({ id }) {
        let url = this._driver.opaqueURL("/templates/info-for-training");
        return this._driver.sendPost({
            data: { id },
            endpoint: url.toString(),
        });
    }

    GetInformationAboutCompany(input) {
        let url = this._driver.opaqueURL("/company/info");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    GetMaxPoints() {
        let url = this._driver.opaqueURL("/missions/max-points");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetMyCertInput = ["id_data", "first_name", "last_name", "email"];
    GetMyCert({ id_data, first_name, last_name, email }) {
        let url = this._driver.opaqueURL("/me/certs");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetMySelfInfo() {
        let url = this._driver.opaqueURL("/users/me");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetMyUsedTrainings(input) {
        let url = this._driver.opaqueURL("/users/trainings-count");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    GetPostInput = ["id"];
    GetPost({ id }) {
        let url = this._driver.opaqueURL(["", "posts", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetPostAnswersInput = ["id_data", "first_name", "last_name", "email", "id"];
    GetPostAnswers({ id_data, first_name, last_name, email, id }) {
        let url = this._driver.opaqueURL(["", "me", "courses", "posts", encodeURIComponent(id), "answers"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetPriceForTraining() {
        let url = this._driver.opaqueURL("/trainings/price");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetPublicTemplateByIdInput = ["id"];
    GetPublicTemplateById({ id }) {
        let url = this._driver.opaqueURL(["", "templates", "public", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetPublicUploadUrlInput = ["id"];
    GetPublicUploadUrl({ id }) {
        let url = this._driver.opaqueURL("/templates/public-upload");
        return this._driver.sendPost({
            data: { id },
            endpoint: url.toString(),
        });
    }

    GetReportInput = ["id_audit"];
    GetReport({ id_audit }) {
        let url = this._driver.opaqueURL("/audits/report/download");
        return this._driver.sendPost({
            data: { id_audit },
            endpoint: url.toString(),
        });
    }

    GetSystemUptime() {
        let url = this._driver.opaqueURL("/system/uptime");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetTermsOfUseDate() {
        let url = this._driver.opaqueURL("/app-settings/terms-of-use");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetTrainingInfo() {
        let url = this._driver.opaqueURL("/trainings/info");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetTransportByIdInput = ["id"];
    GetTransportById({ id }) {
        let url = this._driver.opaqueURL(["", "transports", encodeURIComponent(id), "info"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetTurnoverOfMyCompany() {
        let url = this._driver.opaqueURL("/company/turnover");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetUserBillings() {
        let url = this._driver.opaqueURL("/billings");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetUserByIdInput = ["id"];
    GetUserById({ id }) {
        let url = this._driver.opaqueURL(["", "data", "id", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetUserInfoInput = ["id"];
    GetUserInfo({ id }) {
        let url = this._driver.opaqueURL(["", "users", "info", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetUsersEmployeesDataInput = ["id"];
    GetUsersEmployeesData({ id }) {
        let url = this._driver.opaqueURL(["", "users", "data", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    GetUsersOfCompany(input) {
        let url = this._driver.opaqueURL("/company/users");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    GetWorkspaceSettings() {
        let url = this._driver.opaqueURL("/users/workspace");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    IWasHere() {
        let url = this._driver.opaqueURL("/trainings/i-was-here");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ImageProxy() {
        let url = this._driver.opaqueURL("/proxy/image-proxy");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    InfoAboutMyCourseInput = ["id_data", "first_name", "last_name", "email", "id"];
    InfoAboutMyCourse({ id_data, first_name, last_name, email, id }) {
        let url = this._driver.opaqueURL(["", "me", "courses", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    InsertDetailRecordInput = ["email", "key", "value"];
    InsertDetailRecord({ email, key, value }) {
        let url = this._driver.opaqueURL("/data/details");
        return this._driver.sendPost({
            data: { email, key, value },
            endpoint: url.toString(),
        });
    }

    ListAllPublicTemplates() {
        let url = this._driver.opaqueURL("/templates/public/all");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAllPublicTemplatesAsModerator() {
        let url = this._driver.opaqueURL("/templates/public/all-admin");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAuditEmployeesInput = ["id"];
    ListAuditEmployees({ id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "employees"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAuditEmployeesAsModeratorInput = ["user", "id"];
    ListAuditEmployeesAsModerator({ user, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(user), encodeURIComponent(id), "employees"].join("/"));
        if (user) url.searchParams.set("user", user);
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAuditQueuesInput = ["id"];
    ListAuditQueues({ id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "queues"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAuditQueuesAsModeratorInput = ["user", "id"];
    ListAuditQueuesAsModerator({ user, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(user), encodeURIComponent(id), "queues"].join("/"));
        if (user) url.searchParams.set("user", user);
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAudits() {
        let url = this._driver.opaqueURL("/audits");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAuditsAsModeratorInput = ["owner"];
    ListAuditsAsModerator({ owner }) {
        let url = this._driver.opaqueURL(["", "audits", "users", encodeURIComponent(owner)].join("/"));
        if (owner) url.searchParams.set("owner", owner);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAuditsInProgress() {
        let url = this._driver.opaqueURL("/audits/in-progress");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListAvailableAudits() {
        let url = this._driver.opaqueURL("/audits/available");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListCodes() {
        let url = this._driver.opaqueURL("/codes");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListCompanies() {
        let url = this._driver.opaqueURL("/companies");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListCountry() {
        let url = this._driver.opaqueURL("/countries");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListCourses() {
        let url = this._driver.opaqueURL("/courses");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListCurrentAudits() {
        let url = this._driver.opaqueURL("/audits/current");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListCustomUserAgreementsInput = ["id"];
    ListCustomUserAgreements({ id }) {
        let url = this._driver.opaqueURL(["", "agreements", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListDeals() {
        let url = this._driver.opaqueURL("/partner/deals");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListEmailsFromSandboxInput = ["to"];
    ListEmailsFromSandbox({ to }) {
        let url = this._driver.opaqueURL("/sandbox/download-emails");
        return this._driver.sendPost({
            data: { to },
            endpoint: url.toString(),
        });
    }

    ListFaq() {
        let url = this._driver.opaqueURL("/faq");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListFlowsModerator() {
        let url = this._driver.opaqueURL("/flows");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListIdentitiesToLoginIn() {
        let url = this._driver.opaqueURL("/identities/switch");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListLoggedUserAgreements() {
        let url = this._driver.opaqueURL("/agreements");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListMineDomains() {
        let url = this._driver.opaqueURL("/domain-registration");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListMineTemplates() {
        let url = this._driver.opaqueURL("/templates");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListMineTransports() {
        let url = this._driver.opaqueURL("/transports/mine");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListMyCompanyUsers() {
        let url = this._driver.opaqueURL("/company/users");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListMyPartnerships() {
        let url = this._driver.opaqueURL("/users/me/partnerships");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListNoTrustTemplates() {
        let url = this._driver.opaqueURL("/templates/no-trust");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListOneAuditAsModeratorInput = ["owner"];
    ListOneAuditAsModerator({ owner }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(owner)].join("/"));
        if (owner) url.searchParams.set("owner", owner);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListOrders() {
        let url = this._driver.opaqueURL("/orders");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPartnershipsInput = ["id"];
    ListPartnerships({ id }) {
        let url = this._driver.opaqueURL(["", "partner", encodeURIComponent(id), "partnership"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPersonalTrainings() {
        let url = this._driver.opaqueURL("/users/me/trainings");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPostPages() {
        let url = this._driver.opaqueURL("/post-pages");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPosts() {
        let url = this._driver.opaqueURL("/posts");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPostsCommentsInput = ["id_post"];
    ListPostsComments({ id_post }) {
        let url = this._driver.opaqueURL(["", "posts", encodeURIComponent(id_post), "comments"].join("/"));
        if (id_post) url.searchParams.set("id_post", id_post);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPublicFlows() {
        let url = this._driver.opaqueURL("/flows/public");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPublicTemplateCategoryByCategoryInput = ["id"];
    ListPublicTemplateCategoryByCategory({ id }) {
        let url = this._driver.opaqueURL(["", "template-category", encodeURIComponent(id), "public"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPublicTemplates() {
        let url = this._driver.opaqueURL("/templates/public");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListPublicTransports() {
        let url = this._driver.opaqueURL("/transports");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListQuestions() {
        let url = this._driver.opaqueURL("/questions");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListReactionsOfEmployeeInput = ["id"];
    ListReactionsOfEmployee({ id }) {
        let url = this._driver.opaqueURL(["", "data", encodeURIComponent(id), "reactions"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListReasons() {
        let url = this._driver.opaqueURL("/reasons");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListReasonsAttachingInput = ["id"];
    ListReasonsAttaching({ id }) {
        let url = this._driver.opaqueURL(["", "reasons", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListSyncProfiles() {
        let url = this._driver.opaqueURL("/sync-profiles");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListTemplateCategory() {
        let url = this._driver.opaqueURL("/template-category");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListTemplateMJMLInput = ["id"];
    ListTemplateMJML({ id }) {
        let url = this._driver.opaqueURL(["", "templates", encodeURIComponent(id), "mjml"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListTemplateQueuesInput = ["payed", "id_billing"];
    ListTemplateQueues({ payed, id_billing }) {
        let url = this._driver.opaqueURL("/template-queue");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListTemplatesByUserInput = ["id"];
    ListTemplatesByUser({ id }) {
        let url = this._driver.opaqueURL(["", "templates", "users", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListTrainingsByAuditInput = ["id"];
    ListTrainingsByAudit({ id }) {
        let url = this._driver.opaqueURL(["", "trainings", "by-audit", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListTrainingsHavingEmployee(input) {
        let url = this._driver.opaqueURL("/trainings/list-by-employee");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    ListTrainingsOfCompany() {
        let url = this._driver.opaqueURL("/trainings");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ListUsers() {
        let url = this._driver.opaqueURL("/users");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    Login(input) {
        let url = this._driver.opaqueURL("/users/login");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    LoginAsEmployeeViaAccessToken(input) {
        let url = this._driver.opaqueURL("/trainings/login-token");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    LoginForTraining(input) {
        let url = this._driver.opaqueURL("/trainings/login");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    LongLiveCompleteAllCoursesInOrganisation(input) {
        let url = this._driver.opaqueURL("/procedures/complete-courses-by-comments");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    MakeComplainAboutTraining(input) {
        let url = this._driver.opaqueURL("/trainings/complain");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    Microsoft365LoginParams() {
        let url = this._driver.opaqueURL("/auth/azure/params");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    MicrosoftMarketplaceWebhook(input) {
        let url = this._driver.opaqueURL("/webhooks/microsoft-marketplace");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    ModifyDeal(input) {
        let url = this._driver.opaqueURL("/partner/deals");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    MyCoursesInput = ["id_data", "first_name", "last_name", "email"];
    MyCourses({ id_data, first_name, last_name, email }) {
        let url = this._driver.opaqueURL("/me/courses");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    MyPricing() {
        let url = this._driver.opaqueURL("/users/me/pricing");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    MyTrainings() {
        let url = this._driver.opaqueURL("/me/trainings");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    OverrideUserInfo(input) {
        let url = this._driver.opaqueURL("/identities/info");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    PostsInMyCourseInput = ["id_data", "first_name", "last_name", "email", "id"];
    PostsInMyCourse({ id_data, first_name, last_name, email, id }) {
        let url = this._driver.opaqueURL(["", "me", "courses", encodeURIComponent(id), "posts"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadAuditAsModeratorInput = ["user", "id"];
    ReadAuditAsModerator({ user, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(user), encodeURIComponent(id), "info"].join("/"));
        if (user) url.searchParams.set("user", user);
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadAuditSchemaInput = ["id"];
    ReadAuditSchema({ id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "flow"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadAuditWelcomeSettings() {
        let url = this._driver.opaqueURL("/audits/welcome-settings");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadEmployeesTags() {
        let url = this._driver.opaqueURL("/tags/of-employees");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadIfUserNeedsTutorial(input) {
        let url = this._driver.opaqueURL("/trainings/tutorial");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    ReadMissionForTrainingInput = ["id_mission"];
    ReadMissionForTraining({ id_mission }) {
        let url = this._driver.opaqueURL("/missions/for-report");
        return this._driver.sendPost({
            data: { id_mission },
            endpoint: url.toString(),
        });
    }

    ReadMissionStatusForTrainingInput = ["id_mission"];
    ReadMissionStatusForTraining({ id_mission }) {
        let url = this._driver.opaqueURL("/missions/status");
        return this._driver.sendPost({
            data: { id_mission },
            endpoint: url.toString(),
        });
    }

    ReadMissionsAsModerator() {
        let url = this._driver.opaqueURL("/missions");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadMissionsCategoriesAsModerator() {
        let url = this._driver.opaqueURL("/mission-categories");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadMissionsCategoriesAsUser() {
        let url = this._driver.opaqueURL("/mission-categories/public");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadMissionsForUserTrainingInput = ["id_category"];
    ReadMissionsForUserTraining({ id_category }) {
        let url = this._driver.opaqueURL("/missions/employee");
        return this._driver.sendPost({
            data: { id_category },
            endpoint: url.toString(),
        });
    }

    ReadMyComplains() {
        let url = this._driver.opaqueURL("/trainings/complain");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadMyData() {
        let url = this._driver.opaqueURL("/data");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadMyTags() {
        let url = this._driver.opaqueURL("/tags");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadOneAuditInput = ["id"];
    ReadOneAudit({ id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "info"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadRecordByEmailInput = ["email"];
    ReadRecordByEmail({ email }) {
        let url = this._driver.opaqueURL(["", "data", encodeURIComponent(email)].join("/"));
        if (email) url.searchParams.set("email", email);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReadTrainingPointsOfEmployee(input) {
        let url = this._driver.opaqueURL("/trainings/my-points");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    ReadUserComplainsInput = ["id"];
    ReadUserComplains({ id }) {
        let url = this._driver.opaqueURL(["", "trainings", "complain", encodeURIComponent(id)].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    RedirectToKoalaWebsite() {
        let url = this._driver.opaqueURL("/");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    RegisterClickOnTrainingEnter(input) {
        let url = this._driver.opaqueURL("/trainings/enter");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    RegisterDomain(input) {
        let url = this._driver.opaqueURL("/domain-registration");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    RemoveCode(input) {
        let url = this._driver.opaqueURL("/codes");
        return this._driver.sendDelete({
            data: input,
            endpoint: url.toString(),
        });
    }

    RemovePostCommentInput = ["id_post", "id_posts_comment"];
    RemovePostComment({ id_post, id_posts_comment }) {
        let url = this._driver.opaqueURL("/posts-comments");
        return this._driver.sendDelete({
            data: { id_post, id_posts_comment },
            endpoint: url.toString(),
        });
    }

    RemovePostReactionInput = ["id_post"];
    RemovePostReaction({ id_post }) {
        let url = this._driver.opaqueURL("/posts-reactions");
        return this._driver.sendDelete({
            data: { id_post },
            endpoint: url.toString(),
        });
    }

    RemoveRecordInput = ["email"];
    RemoveRecord({ email }) {
        let url = this._driver.opaqueURL("/data");
        return this._driver.sendDelete({
            data: { email },
            endpoint: url.toString(),
        });
    }

    ReportSpeakInput = ["id", "priority"];
    ReportSpeak({ id, priority }) {
        let url = this._driver.opaqueURL(["", "reports", encodeURIComponent(id), "say-it"].join("/"));
        if (id) url.searchParams.set("id", id);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    ReportTemplateQueueInput = ["id_template_queue", "password"];
    ReportTemplateQueue({ id_template_queue, password }) {
        let url = this._driver.opaqueURL("/template-queue/report");
        return this._driver.sendPost({
            data: { id_template_queue, password },
            endpoint: url.toString(),
        });
    }

    RescheduleTemplateQueueSendingInput = ["start_time", "end_time", "id"];
    RescheduleTemplateQueueSending({ start_time, end_time, id }) {
        let url = this._driver.opaqueURL("/template-queue/reschedule");
        return this._driver.sendPut({
            data: { start_time, end_time, id },
            endpoint: url.toString(),
        });
    }

    ResetPassword(input) {
        let url = this._driver.opaqueURL("/users/reset");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    ResetPasswordRequest(input) {
        let url = this._driver.opaqueURL("/users/reset");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    RestoreDataInput = ["id_data"];
    RestoreData({ id_data }) {
        let url = this._driver.opaqueURL("/data/restore");
        return this._driver.sendPut({
            data: { id_data },
            endpoint: url.toString(),
        });
    }

    RunAudit(input) {
        let url = this._driver.opaqueURL("/audits/run");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    SendingSchedulerByCompany() {
        let url = this._driver.opaqueURL("/scheduler");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    SetGlobalPricing(input) {
        let url = this._driver.opaqueURL("/pricing/global");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    SetMyLanguage(input) {
        let url = this._driver.opaqueURL("/users/me/language");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    SetNewPassword(input) {
        let url = this._driver.opaqueURL("/users/new-password");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    SetPersonalData(input) {
        let url = this._driver.opaqueURL("/users/me/name");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    SetTrustOfTemplate(input) {
        let url = this._driver.opaqueURL("/templates/trust");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    SetVisibilityOfFlowInput = ["id_flow", "visible"];
    SetVisibilityOfFlow({ id_flow, visible }) {
        let url = this._driver.opaqueURL("/flow/visibility");
        return this._driver.sendPut({
            data: { id_flow, visible },
            endpoint: url.toString(),
        });
    }

    SetWorkspaceSettings(input) {
        let url = this._driver.opaqueURL("/users/workspace");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    StartTrainingForMyself(input) {
        let url = this._driver.opaqueURL("/trainings/start");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    SumCustomUserTrainingsValueInput = ["id_identity"];
    SumCustomUserTrainingsValue({ id_identity }) {
        let url = this._driver.opaqueURL("/agreements/sum.admin");
        return this._driver.sendPost({
            data: { id_identity },
            endpoint: url.toString(),
        });
    }

    SwapPosts(input) {
        let url = this._driver.opaqueURL("/posts/swap");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    SwitchIdentity(input) {
        let url = this._driver.opaqueURL("/identities/switch");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    SwitchPartnership(input) {
        let url = this._driver.opaqueURL("/partnership/switch");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    SystemTimeInput = ["id_identity"];
    SystemTime({ id_identity }) {
        let url = this._driver.opaqueURL("/system/time");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    TakeResponsibilityOfSupportTicketInput = ["id_support_ticket"];
    TakeResponsibilityOfSupportTicket({ id_support_ticket }) {
        let url = this._driver.opaqueURL("/support-tickets/responsibility");
        return this._driver.sendPut({
            data: { id_support_ticket },
            endpoint: url.toString(),
        });
    }

    TemplateResolver() {
        let url = this._driver.opaqueURL("/template-resolver");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    TestTransport(input) {
        let url = this._driver.opaqueURL("/transports/test");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    TrainingAccountInfo(input) {
        let url = this._driver.opaqueURL("/trainings/account-info");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    TrainingCompletnes() {
        let url = this._driver.opaqueURL("/reports/training-progress");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    TrainingLeaderboardForClient(input) {
        let url = this._driver.opaqueURL("/trainings/audit-leaderboard");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    TrainingLeaderboardForEmployeeInput = ["id_audit"];
    TrainingLeaderboardForEmployee(input) {
        let url = this._driver.opaqueURL(["", "trainings", encodeURIComponent(id_audit), "employee-leaderboard"].join("/"));
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    UnsignEmployeeFromTagInput = ["id_data", "id"];
    UnsignEmployeeFromTag({ id_data, id }) {
        let url = this._driver.opaqueURL(["", "tags", encodeURIComponent(id)].join("/"));
        return this._driver.sendDelete({
            data: { id_data, id },
            endpoint: url.toString(),
        });
    }

    UpdateAuditRecipeInput = ["recipe", "id"];
    UpdateAuditRecipe({ recipe, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "recipe"].join("/"));
        return this._driver.sendPut({
            data: { recipe, id },
            endpoint: url.toString(),
        });
    }

    UpdateAuditStateInput = ["state", "id"];
    UpdateAuditState({ state, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "state"].join("/"));
        return this._driver.sendPut({
            data: { state, id },
            endpoint: url.toString(),
        });
    }

    UpdateAuditStateAsModeratorInput = ["state", "user", "id"];
    UpdateAuditStateAsModerator({ state, user, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(user), encodeURIComponent(id), "state"].join("/"));
        return this._driver.sendPut({
            data: { state, user, id },
            endpoint: url.toString(),
        });
    }

    UpdateAuditWelcomeSettingsInput = ["logo", "contact", "website"];
    UpdateAuditWelcomeSettings({ logo, contact, website }) {
        let url = this._driver.opaqueURL("/audits/welcome-settings");
        return this._driver.sendPost({
            data: { logo, contact, website },
            endpoint: url.toString(),
        });
    }

    UpdateCourse(input) {
        let url = this._driver.opaqueURL("/courses");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateDataPoolOfCompany(input) {
        let url = this._driver.opaqueURL("/company/data-pool");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateDealStateInput = ["state", "target_state", "id"];
    UpdateDealState({ state, target_state, id }) {
        let url = this._driver.opaqueURL(["", "deals", encodeURIComponent(id), "state"].join("/"));
        return this._driver.sendPut({
            data: { state, target_state, id },
            endpoint: url.toString(),
        });
    }

    UpdateFlow(input) {
        let url = this._driver.opaqueURL("/flows");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateFlowItem(input) {
        let url = this._driver.opaqueURL("/flow/items");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateMineTransport(input) {
        let url = this._driver.opaqueURL("/transports");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateMjmlOfPublicTemplate(input) {
        let url = this._driver.opaqueURL("/templates/public-mjml");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateOrderAsModeatorInput = ["id", "order"];
    UpdateOrderAsModeator({ id, order }) {
        let url = this._driver.opaqueURL("/missions/order");
        return this._driver.sendPost({
            data: { id, order },
            endpoint: url.toString(),
        });
    }

    UpdatePost(input) {
        let url = this._driver.opaqueURL("/posts");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdatePublicTemplateInput = ["id", "id_category", "name", "sender_name", "based_on", "training_only", "lang", "story", "featured", "mjmlCode", "htmlCode", "id_identity", "is_public", "id_mail_transport", "trusted"];
    UpdatePublicTemplate({ id, id_category, name, sender_name, based_on, training_only, lang, story, featured, mjmlCode, htmlCode, id_identity, is_public, id_mail_transport, trusted }) {
        let url = this._driver.opaqueURL("/templates/public");
        return this._driver.sendPut({
            data: { id, id_category, name, sender_name, based_on, training_only, lang, story, featured, mjmlCode, htmlCode, id_identity, is_public, id_mail_transport, trusted },
            endpoint: url.toString(),
        });
    }

    UpdateRecordInput = ["id_data", "first_name", "last_name", "email"];
    UpdateRecord({ id_data, first_name, last_name, email }) {
        let url = this._driver.opaqueURL("/data");
        return this._driver.sendPut({
            data: { id_data, first_name, last_name, email },
            endpoint: url.toString(),
        });
    }

    UpdateStopTrainingsInput = ["stop_trainings", "id"];
    UpdateStopTrainings({ stop_trainings, id }) {
        let url = this._driver.opaqueURL(["", "audits", encodeURIComponent(id), "stop_trainings"].join("/"));
        return this._driver.sendPut({
            data: { stop_trainings, id },
            endpoint: url.toString(),
        });
    }

    UpdateSyncProfiles(input) {
        let url = this._driver.opaqueURL("/sync-profiles");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateTag(input) {
        let url = this._driver.opaqueURL("/tags");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateTemplateInput = ["name", "sender_name", "senderName", "id_mail_transport", "lang", "id_category", "htmlCode", "deleted", "featured", "story", "training_only", "id"];
    UpdateTemplate({ name, sender_name, senderName, id_mail_transport, lang, id_category, htmlCode, deleted, featured, story, training_only, id }) {
        let url = this._driver.opaqueURL(["", "templates", encodeURIComponent(id), "update"].join("/"));
        return this._driver.sendPost({
            data: { name, sender_name, senderName, id_mail_transport, lang, id_category, htmlCode, deleted, featured, story, training_only, id },
            endpoint: url.toString(),
        });
    }

    UpdateTemplateCategoryNamesInput = ["id", "name", "pl_name"];
    UpdateTemplateCategoryNames({ id, name, pl_name }) {
        let url = this._driver.opaqueURL("/template-category/name");
        return this._driver.sendPut({
            data: { id, name, pl_name },
            endpoint: url.toString(),
        });
    }

    UpdateTemplateCategoryPriorityInput = ["id", "priority"];
    UpdateTemplateCategoryPriority({ id, priority }) {
        let url = this._driver.opaqueURL("/template-category/priority");
        return this._driver.sendPut({
            data: { id, priority },
            endpoint: url.toString(),
        });
    }

    UpdateTermsOfUseDate(input) {
        let url = this._driver.opaqueURL("/app-settings/terms-of-use");
        return this._driver.sendPost({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateTurnoverOfCompany(input) {
        let url = this._driver.opaqueURL("/company/turnover");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    UpdateTypeOfCompany(input) {
        let url = this._driver.opaqueURL("/company/type");
        return this._driver.sendPut({
            data: input,
            endpoint: url.toString(),
        });
    }

    VersionSpreading() {
        let url = this._driver.opaqueURL("/_debug/version");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    WeakestLink() {
        let url = this._driver.opaqueURL("/reports/weakest-links");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

};
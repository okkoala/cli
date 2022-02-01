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

    AuditTemplatesFilesInput = ["templates", "extension"];
    AuditTemplatesFiles({ templates, extension }) {
        let url = this._driver.opaqueURL("/templates/audit/files");
        return this._driver.sendPost({
            data: { templates, extension },
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

    AzureActiveDirectorySyncProfileInput = ["refreshToken", "name"];
    AzureActiveDirectorySyncProfile({ refreshToken, name }) {
        let url = this._driver.opaqueURL("/azure-active-directory-sync");
        return this._driver.sendPost({
            data: { refreshToken, name },
            endpoint: url.toString(),
        });
    }

    AzureCodeLoginInput = ["code"];
    AzureCodeLogin({ code }) {
        let url = this._driver.opaqueURL("/auth/outlook-code");
        return this._driver.sendPost({
            data: { code },
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

    AzureOfficeLogin() {
        let url = this._driver.opaqueURL("/auth/office-sso");

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

    CreateCategoryHasTemplateInput = ["id_category_has_templates", "id_template", "id_category"];
    CreateCategoryHasTemplate({ id_category_has_templates, id_template, id_category }) {
        let url = this._driver.opaqueURL("/category-has-templates");
        return this._driver.sendPost({
            data: { id_category_has_templates, id_template, id_category },
            endpoint: url.toString(),
        });
    }

    DeleteCategoryHasTemplateInput = ["id_category_has_templates", "id_template", "id_category"];
    DeleteCategoryHasTemplate({ id_category_has_templates, id_template, id_category }) {
        let url = this._driver.opaqueURL("/category-has-templates");
        return this._driver.sendDelete({
            data: { id_category_has_templates, id_template, id_category },
            endpoint: url.toString(),
        });
    }

    ListCategoryHasTemplateInput = ["id_category_has_templates", "id_template", "id_category"];
    ListCategoryHasTemplate({ id_category_has_templates, id_template, id_category }) {
        let url = this._driver.opaqueURL(["", "category-has-templates"].join("/"));
        if (id_category_has_templates) url.searchParams.set("id_category_has_templates", id_category_has_templates);
        if (id_template) url.searchParams.set("id_template", id_template);
        if (id_category) url.searchParams.set("id_category", id_category);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdateCategoryHasTemplateInput = ["id_category_has_templates", "id_template", "id_category"];
    UpdateCategoryHasTemplate({ id_category_has_templates, id_template, id_category }) {
        let url = this._driver.opaqueURL("/category-has-templates");
        return this._driver.sendPut({
            data: { id_category_has_templates, id_template, id_category },
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

    CreateCourseActivityInput = ["id_course_activity", "id_course", "id_user", "state", "progress"];
    CreateCourseActivity({ id_course_activity, id_course, id_user, state, progress }) {
        let url = this._driver.opaqueURL("/course-activity");
        return this._driver.sendPost({
            data: { id_course_activity, id_course, id_user, state, progress },
            endpoint: url.toString(),
        });
    }

    DeleteCourseActivityInput = ["id_course_activity", "id_course", "id_user", "state", "progress"];
    DeleteCourseActivity({ id_course_activity, id_course, id_user, state, progress }) {
        let url = this._driver.opaqueURL("/course-activity");
        return this._driver.sendDelete({
            data: { id_course_activity, id_course, id_user, state, progress },
            endpoint: url.toString(),
        });
    }

    ListCourseActivityInput = ["id_course_activity", "id_course", "id_user", "state", "progress"];
    ListCourseActivity({ id_course_activity, id_course, id_user, state, progress }) {
        let url = this._driver.opaqueURL(["", "course-activity"].join("/"));
        if (id_course_activity) url.searchParams.set("id_course_activity", id_course_activity);
        if (id_course) url.searchParams.set("id_course", id_course);
        if (id_user) url.searchParams.set("id_user", id_user);
        if (state) url.searchParams.set("state", state);
        if (progress) url.searchParams.set("progress", progress);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdateCourseActivityInput = ["id_course_activity", "id_course", "id_user", "state", "progress"];
    UpdateCourseActivity({ id_course_activity, id_course, id_user, state, progress }) {
        let url = this._driver.opaqueURL("/course-activity");
        return this._driver.sendPut({
            data: { id_course_activity, id_course, id_user, state, progress },
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

    CreateFlowItemInput = ["id_flow_items", "id_flow", "id_mail_transport", "name", "days_offset", "type", "hour_start", "hour_end", "schedule_policy", "redirect_to_training", "template_id", "extensions"];
    CreateFlowItem({ id_flow_items, id_flow, id_mail_transport, name, days_offset, type, hour_start, hour_end, schedule_policy, redirect_to_training, template_id, extensions }) {
        let url = this._driver.opaqueURL("/flow/items");
        return this._driver.sendPost({
            data: { id_flow_items, id_flow, id_mail_transport, name, days_offset, type, hour_start, hour_end, schedule_policy, redirect_to_training, template_id, extensions },
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

    CreateQuestionInput = ["name", "way", "question", "token", "consumed", "id", "email", "phone_number", "when_to_call"];
    CreateQuestion({ name, way, question, token, consumed, id, email, phone_number, when_to_call }) {
        let url = this._driver.opaqueURL("/questions");
        return this._driver.sendPost({
            data: { name, way, question, token, consumed, id, email, phone_number, when_to_call },
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

    CreateTemplateCategoryInput = ["name", "pl_name"];
    CreateTemplateCategory({ name, pl_name }) {
        let url = this._driver.opaqueURL("/template-category");
        return this._driver.sendPost({
            data: { name, pl_name },
            endpoint: url.toString(),
        });
    }

    CreateTrainingInput = ["id_audit", "id_data", "id_user"];
    CreateTraining({ id_audit, id_data, id_user }) {
        let url = this._driver.opaqueURL("/trainings");
        return this._driver.sendPost({
            data: { id_audit, id_data, id_user },
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

    CreateUserBillingInput = ["billingName", "dateValue", "id_aggrement", "id", "email", "payed", "id_identity", "input_email"];
    CreateUserBilling({ billingName, dateValue, id_aggrement, id, email, payed, id_identity, input_email }) {
        let url = this._driver.opaqueURL(["", "billings", "users", encodeURIComponent(input_email)].join("/"));
        return this._driver.sendPost({
            data: { billingName, dateValue, id_aggrement, id, email, payed, id_identity, input_email },
            endpoint: url.toString(),
        });
    }

    CreateDealChangesInput = ["id_deal_change", "id_deal", "email", "previous", "created_at"];
    CreateDealChanges({ id_deal_change, id_deal, email, previous, created_at }) {
        let url = this._driver.opaqueURL("/deal-changes");
        return this._driver.sendPost({
            data: { id_deal_change, id_deal, email, previous, created_at },
            endpoint: url.toString(),
        });
    }

    DeleteDealChangesInput = ["id_deal_change", "id_deal", "email", "previous", "created_at"];
    DeleteDealChanges({ id_deal_change, id_deal, email, previous, created_at }) {
        let url = this._driver.opaqueURL("/deal-changes");
        return this._driver.sendDelete({
            data: { id_deal_change, id_deal, email, previous, created_at },
            endpoint: url.toString(),
        });
    }

    ListDealChangesInput = ["id_deal_change", "id_deal", "email", "previous", "created_at"];
    ListDealChanges({ id_deal_change, id_deal, email, previous, created_at }) {
        let url = this._driver.opaqueURL(["", "deal-changes"].join("/"));
        if (id_deal_change) url.searchParams.set("id_deal_change", id_deal_change);
        if (id_deal) url.searchParams.set("id_deal", id_deal);
        if (email) url.searchParams.set("email", email);
        if (previous) url.searchParams.set("previous", previous);
        if (created_at) url.searchParams.set("created_at", created_at);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdateDealChangesInput = ["id_deal_change", "id_deal", "email", "previous", "created_at"];
    UpdateDealChanges({ id_deal_change, id_deal, email, previous, created_at }) {
        let url = this._driver.opaqueURL("/deal-changes");
        return this._driver.sendPut({
            data: { id_deal_change, id_deal, email, previous, created_at },
            endpoint: url.toString(),
        });
    }

    CreateDealsInput = ["id_deal", "id_partner", "id_user", "company_name", "tax_number", "address", "zip_code", "city", "licenses", "global_price", "partner_price", "is_m365", "pdf_link", "first_name", "last_name", "email", "phone", "country", "description", "source", "created_at", "state", "is_frozen", "estimated_close", "contact_role", "is_decision_maker"];
    CreateDeals({ id_deal, id_partner, id_user, company_name, tax_number, address, zip_code, city, licenses, global_price, partner_price, is_m365, pdf_link, first_name, last_name, email, phone, country, description, source, created_at, state, is_frozen, estimated_close, contact_role, is_decision_maker }) {
        let url = this._driver.opaqueURL("/deals");
        return this._driver.sendPost({
            data: { id_deal, id_partner, id_user, company_name, tax_number, address, zip_code, city, licenses, global_price, partner_price, is_m365, pdf_link, first_name, last_name, email, phone, country, description, source, created_at, state, is_frozen, estimated_close, contact_role, is_decision_maker },
            endpoint: url.toString(),
        });
    }

    DeleteDealsInput = ["id_deal", "id_partner", "id_user", "company_name", "tax_number", "address", "zip_code", "city", "licenses", "global_price", "partner_price", "is_m365", "pdf_link", "first_name", "last_name", "email", "phone", "country", "description", "source", "created_at", "state", "is_frozen", "estimated_close", "contact_role", "is_decision_maker"];
    DeleteDeals({ id_deal, id_partner, id_user, company_name, tax_number, address, zip_code, city, licenses, global_price, partner_price, is_m365, pdf_link, first_name, last_name, email, phone, country, description, source, created_at, state, is_frozen, estimated_close, contact_role, is_decision_maker }) {
        let url = this._driver.opaqueURL("/deals");
        return this._driver.sendDelete({
            data: { id_deal, id_partner, id_user, company_name, tax_number, address, zip_code, city, licenses, global_price, partner_price, is_m365, pdf_link, first_name, last_name, email, phone, country, description, source, created_at, state, is_frozen, estimated_close, contact_role, is_decision_maker },
            endpoint: url.toString(),
        });
    }

    ListDealsInput = ["id_deal", "id_partner", "id_user", "company_name", "tax_number", "address", "zip_code", "city", "licenses", "global_price", "partner_price", "is_m365", "pdf_link", "first_name", "last_name", "email", "phone", "country", "description", "source", "created_at", "state", "is_frozen", "estimated_close", "contact_role", "is_decision_maker"];
    ListDeals({ id_deal, id_partner, id_user, company_name, tax_number, address, zip_code, city, licenses, global_price, partner_price, is_m365, pdf_link, first_name, last_name, email, phone, country, description, source, created_at, state, is_frozen, estimated_close, contact_role, is_decision_maker }) {
        let url = this._driver.opaqueURL(["", "deals"].join("/"));
        if (id_deal) url.searchParams.set("id_deal", id_deal);
        if (id_partner) url.searchParams.set("id_partner", id_partner);
        if (id_user) url.searchParams.set("id_user", id_user);
        if (company_name) url.searchParams.set("company_name", company_name);
        if (tax_number) url.searchParams.set("tax_number", tax_number);
        if (address) url.searchParams.set("address", address);
        if (zip_code) url.searchParams.set("zip_code", zip_code);
        if (city) url.searchParams.set("city", city);
        if (licenses) url.searchParams.set("licenses", licenses);
        if (global_price) url.searchParams.set("global_price", global_price);
        if (partner_price) url.searchParams.set("partner_price", partner_price);
        if (is_m365) url.searchParams.set("is_m365", is_m365);
        if (pdf_link) url.searchParams.set("pdf_link", pdf_link);
        if (first_name) url.searchParams.set("first_name", first_name);
        if (last_name) url.searchParams.set("last_name", last_name);
        if (email) url.searchParams.set("email", email);
        if (phone) url.searchParams.set("phone", phone);
        if (country) url.searchParams.set("country", country);
        if (description) url.searchParams.set("description", description);
        if (source) url.searchParams.set("source", source);
        if (created_at) url.searchParams.set("created_at", created_at);
        if (state) url.searchParams.set("state", state);
        if (is_frozen) url.searchParams.set("is_frozen", is_frozen);
        if (estimated_close) url.searchParams.set("estimated_close", estimated_close);
        if (contact_role) url.searchParams.set("contact_role", contact_role);
        if (is_decision_maker) url.searchParams.set("is_decision_maker", is_decision_maker);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdateDealsInput = ["id_deal", "id_partner", "id_user", "company_name", "tax_number", "address", "zip_code", "city", "licenses", "global_price", "partner_price", "is_m365", "pdf_link", "first_name", "last_name", "email", "phone", "country", "description", "source", "created_at", "state", "is_frozen", "estimated_close", "contact_role", "is_decision_maker"];
    UpdateDeals({ id_deal, id_partner, id_user, company_name, tax_number, address, zip_code, city, licenses, global_price, partner_price, is_m365, pdf_link, first_name, last_name, email, phone, country, description, source, created_at, state, is_frozen, estimated_close, contact_role, is_decision_maker }) {
        let url = this._driver.opaqueURL("/deals");
        return this._driver.sendPut({
            data: { id_deal, id_partner, id_user, company_name, tax_number, address, zip_code, city, licenses, global_price, partner_price, is_m365, pdf_link, first_name, last_name, email, phone, country, description, source, created_at, state, is_frozen, estimated_close, contact_role, is_decision_maker },
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

    DeleteMineDomainInput = ["domain"];
    DeleteMineDomain({ domain }) {
        let url = this._driver.opaqueURL("/domain-registration");
        return this._driver.sendDelete({
            data: { domain },
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

    DeletePostInput = ["id_post"];
    DeletePost({ id_post }) {
        let url = this._driver.opaqueURL("/posts");
        return this._driver.sendDelete({
            data: { id_post },
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

    EnableDevSupportInput = ["dev_enabled"];
    EnableDevSupport({ dev_enabled }) {
        let url = this._driver.opaqueURL("/users/me/developer");
        return this._driver.sendPut({
            data: { dev_enabled },
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

    CreateEventInput = ["id_event", "id_user", "id_identity", "key", "value"];
    CreateEvent({ id_event, id_user, id_identity, key, value }) {
        let url = this._driver.opaqueURL("/events");
        return this._driver.sendPost({
            data: { id_event, id_user, id_identity, key, value },
            endpoint: url.toString(),
        });
    }

    DeleteEventInput = ["id_event", "id_user", "id_identity", "key", "value"];
    DeleteEvent({ id_event, id_user, id_identity, key, value }) {
        let url = this._driver.opaqueURL("/events");
        return this._driver.sendDelete({
            data: { id_event, id_user, id_identity, key, value },
            endpoint: url.toString(),
        });
    }

    ListEventInput = ["id_event", "id_user", "id_identity", "key", "value"];
    ListEvent({ id_event, id_user, id_identity, key, value }) {
        let url = this._driver.opaqueURL(["", "events"].join("/"));
        if (id_event) url.searchParams.set("id_event", id_event);
        if (id_user) url.searchParams.set("id_user", id_user);
        if (id_identity) url.searchParams.set("id_identity", id_identity);
        if (key) url.searchParams.set("key", key);
        if (value) url.searchParams.set("value", value);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdateEventInput = ["id_event", "id_user", "id_identity", "key", "value"];
    UpdateEvent({ id_event, id_user, id_identity, key, value }) {
        let url = this._driver.opaqueURL("/events");
        return this._driver.sendPut({
            data: { id_event, id_user, id_identity, key, value },
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

    GetCustomUserUsedTrainingsInput = ["id_identity"];
    GetCustomUserUsedTrainings({ id_identity }) {
        let url = this._driver.opaqueURL("/users/trainings-count-admin");
        return this._driver.sendPost({
            data: { id_identity },
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

    GetDeveloperSupportInput = ["dev_enabled"];
    GetDeveloperSupport({ dev_enabled }) {
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

    GetInformationAboutCompanyInput = ["id"];
    GetInformationAboutCompany({ id }) {
        let url = this._driver.opaqueURL("/company/info");
        return this._driver.sendPost({
            data: { id },
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

    GetUsersOfCompanyInput = ["id"];
    GetUsersOfCompany({ id }) {
        let url = this._driver.opaqueURL("/company/users");
        return this._driver.sendPost({
            data: { id },
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

    ListTrainingsHavingEmployeeInput = ["id_data"];
    ListTrainingsHavingEmployee({ id_data }) {
        let url = this._driver.opaqueURL("/trainings/list-by-employee");
        return this._driver.sendPost({
            data: { id_data },
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

    LoginInput = ["username", "password", "token"];
    Login({ username, password, token }) {
        let url = this._driver.opaqueURL("/users/login");
        return this._driver.sendPost({
            data: { username, password, token },
            endpoint: url.toString(),
        });
    }

    LoginAsEmployeeViaAccessTokenInput = ["accessToken"];
    LoginAsEmployeeViaAccessToken({ accessToken }) {
        let url = this._driver.opaqueURL("/trainings/login-token");
        return this._driver.sendPost({
            data: { accessToken },
            endpoint: url.toString(),
        });
    }

    LoginForTrainingInput = ["id_template_queue", "password"];
    LoginForTraining({ id_template_queue, password }) {
        let url = this._driver.opaqueURL("/trainings/login");
        return this._driver.sendPost({
            data: { id_template_queue, password },
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

    OverrideUserInfoInput = ["id_identity", "company", "address", "nip", "regon", "phone_number"];
    OverrideUserInfo({ id_identity, company, address, nip, regon, phone_number }) {
        let url = this._driver.opaqueURL("/identities/info");
        return this._driver.sendPost({
            data: { id_identity, company, address, nip, regon, phone_number },
            endpoint: url.toString(),
        });
    }

    CreatePartnerInput = ["id_partner", "name", "id_pricing"];
    CreatePartner({ id_partner, name, id_pricing }) {
        let url = this._driver.opaqueURL("/partners");
        return this._driver.sendPost({
            data: { id_partner, name, id_pricing },
            endpoint: url.toString(),
        });
    }

    DeletePartnerInput = ["id_partner", "name", "id_pricing"];
    DeletePartner({ id_partner, name, id_pricing }) {
        let url = this._driver.opaqueURL("/partners");
        return this._driver.sendDelete({
            data: { id_partner, name, id_pricing },
            endpoint: url.toString(),
        });
    }

    ListPartnerInput = ["id_partner", "name", "id_pricing"];
    ListPartner({ id_partner, name, id_pricing }) {
        let url = this._driver.opaqueURL(["", "partners"].join("/"));
        if (id_partner) url.searchParams.set("id_partner", id_partner);
        if (name) url.searchParams.set("name", name);
        if (id_pricing) url.searchParams.set("id_pricing", id_pricing);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdatePartnerInput = ["id_partner", "name", "id_pricing"];
    UpdatePartner({ id_partner, name, id_pricing }) {
        let url = this._driver.opaqueURL("/partners");
        return this._driver.sendPut({
            data: { id_partner, name, id_pricing },
            endpoint: url.toString(),
        });
    }

    CreatePartnershipInput = ["id_partnership", "user_role", "id_user", "id_partner", "is_default"];
    CreatePartnership({ id_partnership, user_role, id_user, id_partner, is_default }) {
        let url = this._driver.opaqueURL("/partnership");
        return this._driver.sendPost({
            data: { id_partnership, user_role, id_user, id_partner, is_default },
            endpoint: url.toString(),
        });
    }

    DeletePartnershipInput = ["id_partnership", "user_role", "id_user", "id_partner", "is_default"];
    DeletePartnership({ id_partnership, user_role, id_user, id_partner, is_default }) {
        let url = this._driver.opaqueURL("/partnership");
        return this._driver.sendDelete({
            data: { id_partnership, user_role, id_user, id_partner, is_default },
            endpoint: url.toString(),
        });
    }

    ListPartnershipInput = ["id_partnership", "user_role", "id_user", "id_partner", "is_default"];
    ListPartnership({ id_partnership, user_role, id_user, id_partner, is_default }) {
        let url = this._driver.opaqueURL(["", "partnership"].join("/"));
        if (id_partnership) url.searchParams.set("id_partnership", id_partnership);
        if (user_role) url.searchParams.set("user_role", user_role);
        if (id_user) url.searchParams.set("id_user", id_user);
        if (id_partner) url.searchParams.set("id_partner", id_partner);
        if (is_default) url.searchParams.set("is_default", is_default);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdatePartnershipInput = ["id_partnership", "user_role", "id_user", "id_partner", "is_default"];
    UpdatePartnership({ id_partnership, user_role, id_user, id_partner, is_default }) {
        let url = this._driver.opaqueURL("/partnership");
        return this._driver.sendPut({
            data: { id_partnership, user_role, id_user, id_partner, is_default },
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

    CreatePricingInput = ["id_pricing", "name", "pricelist", "is_public", "minimum_to_buy", "is_global"];
    CreatePricing({ id_pricing, name, pricelist, is_public, minimum_to_buy, is_global }) {
        let url = this._driver.opaqueURL("/pricing");
        return this._driver.sendPost({
            data: { id_pricing, name, pricelist, is_public, minimum_to_buy, is_global },
            endpoint: url.toString(),
        });
    }

    DeletePricingInput = ["id_pricing", "name", "pricelist", "is_public", "minimum_to_buy", "is_global"];
    DeletePricing({ id_pricing, name, pricelist, is_public, minimum_to_buy, is_global }) {
        let url = this._driver.opaqueURL("/pricing");
        return this._driver.sendDelete({
            data: { id_pricing, name, pricelist, is_public, minimum_to_buy, is_global },
            endpoint: url.toString(),
        });
    }

    ListPricingInput = ["id_pricing", "name", "pricelist", "is_public", "minimum_to_buy", "is_global"];
    ListPricing({ id_pricing, name, pricelist, is_public, minimum_to_buy, is_global }) {
        let url = this._driver.opaqueURL(["", "pricing"].join("/"));
        if (id_pricing) url.searchParams.set("id_pricing", id_pricing);
        if (name) url.searchParams.set("name", name);
        if (pricelist) url.searchParams.set("pricelist", pricelist);
        if (is_public) url.searchParams.set("is_public", is_public);
        if (minimum_to_buy) url.searchParams.set("minimum_to_buy", minimum_to_buy);
        if (is_global) url.searchParams.set("is_global", is_global);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdatePricingInput = ["id_pricing", "name", "pricelist", "is_public", "minimum_to_buy", "is_global"];
    UpdatePricing({ id_pricing, name, pricelist, is_public, minimum_to_buy, is_global }) {
        let url = this._driver.opaqueURL("/pricing");
        return this._driver.sendPut({
            data: { id_pricing, name, pricelist, is_public, minimum_to_buy, is_global },
            endpoint: url.toString(),
        });
    }

    CreateQuizAnswersInput = ["id_quiz_answers", "id_post", "id_user", "answer", "created_at", "is_correct"];
    CreateQuizAnswers({ id_quiz_answers, id_post, id_user, answer, created_at, is_correct }) {
        let url = this._driver.opaqueURL("/quiz-answers");
        return this._driver.sendPost({
            data: { id_quiz_answers, id_post, id_user, answer, created_at, is_correct },
            endpoint: url.toString(),
        });
    }

    DeleteQuizAnswersInput = ["id_quiz_answers", "id_post", "id_user", "answer", "created_at", "is_correct"];
    DeleteQuizAnswers({ id_quiz_answers, id_post, id_user, answer, created_at, is_correct }) {
        let url = this._driver.opaqueURL("/quiz-answers");
        return this._driver.sendDelete({
            data: { id_quiz_answers, id_post, id_user, answer, created_at, is_correct },
            endpoint: url.toString(),
        });
    }

    ListQuizAnswersInput = ["id_quiz_answers", "id_post", "id_user", "answer", "created_at", "is_correct"];
    ListQuizAnswers({ id_quiz_answers, id_post, id_user, answer, created_at, is_correct }) {
        let url = this._driver.opaqueURL(["", "quiz-answers"].join("/"));
        if (id_quiz_answers) url.searchParams.set("id_quiz_answers", id_quiz_answers);
        if (id_post) url.searchParams.set("id_post", id_post);
        if (id_user) url.searchParams.set("id_user", id_user);
        if (answer) url.searchParams.set("answer", answer);
        if (created_at) url.searchParams.set("created_at", created_at);
        if (is_correct) url.searchParams.set("is_correct", is_correct);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdateQuizAnswersInput = ["id_quiz_answers", "id_post", "id_user", "answer", "created_at", "is_correct"];
    UpdateQuizAnswers({ id_quiz_answers, id_post, id_user, answer, created_at, is_correct }) {
        let url = this._driver.opaqueURL("/quiz-answers");
        return this._driver.sendPut({
            data: { id_quiz_answers, id_post, id_user, answer, created_at, is_correct },
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

    RegisterClickOnTrainingEnterInput = ["id_template_queue", "password"];
    RegisterClickOnTrainingEnter({ id_template_queue, password }) {
        let url = this._driver.opaqueURL("/trainings/enter");
        return this._driver.sendPost({
            data: { id_template_queue, password },
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

    ReportSpeakInput = ["id", "priority", "report_id"];
    ReportSpeak({ id, priority, report_id }) {
        let url = this._driver.opaqueURL(["", "reports", encodeURIComponent(report_id), "say-it"].join("/"));
        if (report_id) url.searchParams.set("report_id", report_id);

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

    ResetPasswordInput = ["username", "password", "token", "id_template_queue", "training_password"];
    ResetPassword({ username, password, token, id_template_queue, training_password }) {
        let url = this._driver.opaqueURL("/users/reset");
        return this._driver.sendPost({
            data: { username, password, token, id_template_queue, training_password },
            endpoint: url.toString(),
        });
    }

    ResetPasswordRequestInput = ["email"];
    ResetPasswordRequest({ email }) {
        let url = this._driver.opaqueURL("/users/reset");
        return this._driver.sendPut({
            data: { email },
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

    RunAuditInput = ["id"];
    RunAudit({ id }) {
        let url = this._driver.opaqueURL("/audits/run");
        return this._driver.sendPost({
            data: { id },
            endpoint: url.toString(),
        });
    }

    SendingSchedulerByCompany() {
        let url = this._driver.opaqueURL("/scheduler");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    SetGlobalPricingInput = ["id_pricing"];
    SetGlobalPricing({ id_pricing }) {
        let url = this._driver.opaqueURL("/pricing/global");
        return this._driver.sendPut({
            data: { id_pricing },
            endpoint: url.toString(),
        });
    }

    SetMyLanguageInput = ["lang"];
    SetMyLanguage({ lang }) {
        let url = this._driver.opaqueURL("/users/me/language");
        return this._driver.sendPut({
            data: { lang },
            endpoint: url.toString(),
        });
    }

    SetNewPasswordInput = ["oldPassword", "newPassword"];
    SetNewPassword({ oldPassword, newPassword }) {
        let url = this._driver.opaqueURL("/users/new-password");
        return this._driver.sendPost({
            data: { oldPassword, newPassword },
            endpoint: url.toString(),
        });
    }

    SetPersonalDataInput = ["first_name", "last_name"];
    SetPersonalData({ first_name, last_name }) {
        let url = this._driver.opaqueURL("/users/me/name");
        return this._driver.sendPut({
            data: { first_name, last_name },
            endpoint: url.toString(),
        });
    }

    SetTrustOfTemplateInput = ["id_template", "isTrusted"];
    SetTrustOfTemplate({ id_template, isTrusted }) {
        let url = this._driver.opaqueURL("/templates/trust");
        return this._driver.sendPut({
            data: { id_template, isTrusted },
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

    SetWorkspaceSettingsInput = ["pro"];
    SetWorkspaceSettings({ pro }) {
        let url = this._driver.opaqueURL("/users/workspace");
        return this._driver.sendPost({
            data: { pro },
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

    CreateSupportInput = ["id_support_ticket", "id_user_responsibility", "id_identity", "type", "text", "id_user", "module", "impact", "title", "state", "closed_at", "first_response_time"];
    CreateSupport({ id_support_ticket, id_user_responsibility, id_identity, type, text, id_user, module, impact, title, state, closed_at, first_response_time }) {
        let url = this._driver.opaqueURL("/support-tickets");
        return this._driver.sendPost({
            data: { id_support_ticket, id_user_responsibility, id_identity, type, text, id_user, module, impact, title, state, closed_at, first_response_time },
            endpoint: url.toString(),
        });
    }

    DeleteSupportInput = ["id_support_ticket", "id_user_responsibility", "id_identity", "type", "text", "id_user", "module", "impact", "title", "state", "closed_at", "first_response_time"];
    DeleteSupport({ id_support_ticket, id_user_responsibility, id_identity, type, text, id_user, module, impact, title, state, closed_at, first_response_time }) {
        let url = this._driver.opaqueURL("/support-tickets");
        return this._driver.sendDelete({
            data: { id_support_ticket, id_user_responsibility, id_identity, type, text, id_user, module, impact, title, state, closed_at, first_response_time },
            endpoint: url.toString(),
        });
    }

    ListSupportInput = ["id_support_ticket", "id_user_responsibility", "id_identity", "type", "text", "id_user", "module", "impact", "title", "state", "closed_at", "first_response_time"];
    ListSupport({ id_support_ticket, id_user_responsibility, id_identity, type, text, id_user, module, impact, title, state, closed_at, first_response_time }) {
        let url = this._driver.opaqueURL(["", "support-tickets"].join("/"));
        if (id_support_ticket) url.searchParams.set("id_support_ticket", id_support_ticket);
        if (id_user_responsibility) url.searchParams.set("id_user_responsibility", id_user_responsibility);
        if (id_identity) url.searchParams.set("id_identity", id_identity);
        if (type) url.searchParams.set("type", type);
        if (text) url.searchParams.set("text", text);
        if (id_user) url.searchParams.set("id_user", id_user);
        if (module) url.searchParams.set("module", module);
        if (impact) url.searchParams.set("impact", impact);
        if (title) url.searchParams.set("title", title);
        if (state) url.searchParams.set("state", state);
        if (closed_at) url.searchParams.set("closed_at", closed_at);
        if (first_response_time) url.searchParams.set("first_response_time", first_response_time);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdateSupportInput = ["id_support_ticket", "id_user_responsibility", "id_identity", "type", "text", "id_user", "module", "impact", "title", "state", "closed_at", "first_response_time"];
    UpdateSupport({ id_support_ticket, id_user_responsibility, id_identity, type, text, id_user, module, impact, title, state, closed_at, first_response_time }) {
        let url = this._driver.opaqueURL("/support-tickets");
        return this._driver.sendPut({
            data: { id_support_ticket, id_user_responsibility, id_identity, type, text, id_user, module, impact, title, state, closed_at, first_response_time },
            endpoint: url.toString(),
        });
    }

    SwapPostsInput = ["topPostId", "bottomPostId"];
    SwapPosts({ topPostId, bottomPostId }) {
        let url = this._driver.opaqueURL("/posts/swap");
        return this._driver.sendPut({
            data: { topPostId, bottomPostId },
            endpoint: url.toString(),
        });
    }

    SwitchIdentityInput = ["id_identity"];
    SwitchIdentity({ id_identity }) {
        let url = this._driver.opaqueURL("/identities/switch");
        return this._driver.sendPost({
            data: { id_identity },
            endpoint: url.toString(),
        });
    }

    SwitchPartnershipInput = ["id_partner"];
    SwitchPartnership({ id_partner }) {
        let url = this._driver.opaqueURL("/partnership/switch");
        return this._driver.sendPost({
            data: { id_partner },
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

    TestTransportInput = ["id_mail_transport", "target"];
    TestTransport({ id_mail_transport, target }) {
        let url = this._driver.opaqueURL("/transports/test");
        return this._driver.sendPost({
            data: { id_mail_transport, target },
            endpoint: url.toString(),
        });
    }

    CreateThreatsInput = ["id_threat", "id_identity", "id_user", "sender", "title", "body"];
    CreateThreats({ id_threat, id_identity, id_user, sender, title, body }) {
        let url = this._driver.opaqueURL("/threats");
        return this._driver.sendPost({
            data: { id_threat, id_identity, id_user, sender, title, body },
            endpoint: url.toString(),
        });
    }

    DeleteThreatsInput = ["id_threat", "id_identity", "id_user", "sender", "title", "body"];
    DeleteThreats({ id_threat, id_identity, id_user, sender, title, body }) {
        let url = this._driver.opaqueURL("/threats");
        return this._driver.sendDelete({
            data: { id_threat, id_identity, id_user, sender, title, body },
            endpoint: url.toString(),
        });
    }

    ListThreatsInput = ["id_threat", "id_identity", "id_user", "sender", "title", "body"];
    ListThreats({ id_threat, id_identity, id_user, sender, title, body }) {
        let url = this._driver.opaqueURL(["", "threats"].join("/"));
        if (id_threat) url.searchParams.set("id_threat", id_threat);
        if (id_identity) url.searchParams.set("id_identity", id_identity);
        if (id_user) url.searchParams.set("id_user", id_user);
        if (sender) url.searchParams.set("sender", sender);
        if (title) url.searchParams.set("title", title);
        if (body) url.searchParams.set("body", body);

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    UpdateThreatsInput = ["id_threat", "id_identity", "id_user", "sender", "title", "body"];
    UpdateThreats({ id_threat, id_identity, id_user, sender, title, body }) {
        let url = this._driver.opaqueURL("/threats");
        return this._driver.sendPut({
            data: { id_threat, id_identity, id_user, sender, title, body },
            endpoint: url.toString(),
        });
    }

    TrainingAccountInfoInput = ["id_template_queue", "password"];
    TrainingAccountInfo({ id_template_queue, password }) {
        let url = this._driver.opaqueURL("/trainings/account-info");
        return this._driver.sendPost({
            data: { id_template_queue, password },
            endpoint: url.toString(),
        });
    }

    TrainingCompletnes() {
        let url = this._driver.opaqueURL("/reports/training-progress");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    TrainingCompletnesDetails() {
        let url = this._driver.opaqueURL("/reports/training-completeness-details");

        return this._driver.sendGet({
            endpoint: url.toString(),
        });
    }

    TrainingLeaderboardForClientInput = ["id_audit"];
    TrainingLeaderboardForClient({ id_audit }) {
        let url = this._driver.opaqueURL("/trainings/audit-leaderboard");
        return this._driver.sendPost({
            data: { id_audit },
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

    UpdateDataPoolOfCompanyInput = ["id_identity", "data_pool"];
    UpdateDataPoolOfCompany({ id_identity, data_pool }) {
        let url = this._driver.opaqueURL("/company/data-pool");
        return this._driver.sendPut({
            data: { id_identity, data_pool },
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

    UpdateFlowItemInput = ["id_flow_items", "id_flow", "id_mail_transport", "name", "days_offset", "type", "hour_start", "hour_end", "schedule_policy", "redirect_to_training", "template_id", "extensions"];
    UpdateFlowItem({ id_flow_items, id_flow, id_mail_transport, name, days_offset, type, hour_start, hour_end, schedule_policy, redirect_to_training, template_id, extensions }) {
        let url = this._driver.opaqueURL("/flow/items");
        return this._driver.sendPut({
            data: { id_flow_items, id_flow, id_mail_transport, name, days_offset, type, hour_start, hour_end, schedule_policy, redirect_to_training, template_id, extensions },
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

    UpdateMjmlOfPublicTemplateInput = ["id", "code"];
    UpdateMjmlOfPublicTemplate({ id, code }) {
        let url = this._driver.opaqueURL("/templates/public-mjml");
        return this._driver.sendPut({
            data: { id, code },
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

    UpdatePostInput = ["quiz", "quiz_answer", "id_post", "id_category", "id_author", "id_course", "text", "image", "lang", "ref", "order", "video"];
    UpdatePost({ quiz, quiz_answer, id_post, id_category, id_author, id_course, text, image, lang, ref, order, video }) {
        let url = this._driver.opaqueURL("/posts");
        return this._driver.sendPut({
            data: { quiz, quiz_answer, id_post, id_category, id_author, id_course, text, image, lang, ref, order, video },
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

    UpdateSyncProfilesInput = ["cron", "id_sync_profiles"];
    UpdateSyncProfiles({ cron, id_sync_profiles }) {
        let url = this._driver.opaqueURL("/sync-profiles");
        return this._driver.sendPut({
            data: { cron, id_sync_profiles },
            endpoint: url.toString(),
        });
    }

    UpdateTagInput = ["id", "name"];
    UpdateTag({ id, name }) {
        let url = this._driver.opaqueURL("/tags");
        return this._driver.sendPut({
            data: { id, name },
            endpoint: url.toString(),
        });
    }

    UpdateTemplateInput = ["name", "sender_name", "senderName", "id_mail_transport", "lang", "id_category", "mjmlCode", "htmlCode", "deleted", "featured", "story", "training_only", "is_public", "trusted", "id"];
    UpdateTemplate({ name, sender_name, senderName, id_mail_transport, lang, id_category, mjmlCode, htmlCode, deleted, featured, story, training_only, is_public, trusted, id }) {
        let url = this._driver.opaqueURL(["", "templates", encodeURIComponent(id), "update"].join("/"));
        return this._driver.sendPost({
            data: { name, sender_name, senderName, id_mail_transport, lang, id_category, mjmlCode, htmlCode, deleted, featured, story, training_only, is_public, trusted, id },
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

    UpdateTermsOfUseDateInput = ["terms"];
    UpdateTermsOfUseDate({ terms }) {
        let url = this._driver.opaqueURL("/app-settings/terms-of-use");
        return this._driver.sendPost({
            data: { terms },
            endpoint: url.toString(),
        });
    }

    UpdateTurnoverOfCompanyInput = ["id_identity", "turnover"];
    UpdateTurnoverOfCompany({ id_identity, turnover }) {
        let url = this._driver.opaqueURL("/company/turnover");
        return this._driver.sendPut({
            data: { id_identity, turnover },
            endpoint: url.toString(),
        });
    }

    UpdateTypeOfCompanyInput = ["id", "type"];
    UpdateTypeOfCompany({ id, type }) {
        let url = this._driver.opaqueURL("/company/type");
        return this._driver.sendPut({
            data: { id, type },
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
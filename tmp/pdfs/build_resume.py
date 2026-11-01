from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from xml.sax.saxutils import escape
from pathlib import Path
out=Path('output/pdf')
name='Hritvik Dinkar'
contact='Bengaluru, India | +91 9876842631 | hritvik.works@gmail.com'
links='linkedin.com/in/hritvik | hritvik-dinkar.pages.dev'
summary='Senior Backend / Platform Engineer | Generative AI & Distributed Systems'
intro='Software Development Engineer III at Meesho with 8+ years building production backend, GenAI, and data platforms. Owns system design, implementation, rollout, and operations for supplier-support automation and shared LLM services, with a focus on fault tolerance, configurable orchestration, and production reliability.'
skills=[('Generative AI','Azure OpenAI, LLM inference routing, provider/deployment failover, prompt templates and registries, model/deployment registries, deterministic traffic splitting, LLM evaluation, intent classification, response generation, agent loops, FAQ retrieval'),('System Design','Distributed systems, microservices, event-driven architecture, API composition, dependency modeling, concurrent execution, fan-out/fan-in, idempotency, retries, dead-letter queues (DLQs), replay, circuit breakers, caching, high availability, capacity planning'),('Languages & Platforms','Java, Python, Spring Boot, FastAPI, REST APIs, Kafka, MongoDB, Redis, Elasticsearch, Apache Spark, Prometheus, Grafana, Metabase, Terraform, Jenkins')]
meesho=[
'Owned end-to-end architecture and delivery of Agentless, a supplier-support automation platform combining Java/Spring Boot workflow orchestration with Python/FastAPI GenAI services; expanded automation to 60% of supplier ticket categories.',
'Designed durable, event-driven workflows using Kafka fan-out/fan-in, MongoDB ticket/entity processing contexts, step-level idempotency, typed retries, DLQs, replay, and stalled-ticket recovery to resume partial failures safely.',
'Converted business-owned SOPs into configurable workflow steps and MVEL rules, integrating LLM-based intent classification, response generation, and human escalation paths.',
'Built shared GenAI platform services with model/deployment and prompt registries, a provider-agnostic LLM bridge, validated routing plans, deterministic weighted traffic splitting, and automatic provider/deployment failover.',
'Implemented LLM evaluation flows and Prometheus/Grafana observability; supported configuration refresh and Redis caching, with Terraform-backed Azure OpenAI deployment operations.',
'Designed a configuration-driven API-composition service with field/API dependency modeling, concurrent execution, fan-out, and response stitching; guided a junior engineer through execution-layer implementation and configuration-only onboarding.',
'Reduced earlier Support Chatbot human escalation from 25% to about 10% (low of 8%) through FAQ retrieval, model routing, prompt and evaluation improvements, fallback policy, and agent-loop response generation using ticket/order API context.',
'Validated support systems at 5x projected sale traffic and helped resolve a thread-pool memory leak, reducing pod requirements from 35 cores / 70 GB to 21 cores / 40 GB.',
'Cut contact-center data ingestion runtime from 2 hours to 2 minutes; delivered zero-downtime ticketing migration and reconciliation workflows across external support platforms.',
'Mentored engineers through task decomposition, architecture and code reviews; coordinated rollout and stakeholder demos across product, support, and business teams.'
]
oracle=['Built an embeddable Oracle Commerce integration plugin for credential collection, field mapping, sync initiation, and sync monitoring using Oracle Visual Builder, JavaScript, and Knockout.']
jio=['Built Java/Python computation and analytics services using Elasticsearch, Kafka, and Spark, supporting KPI processing, forecasting, dashboards, and high-availability cluster operations.','Implemented dependency-aware derived-KPI computation with topological evaluation and cached multi-resolution aggregations for large-scale telecom analytics.']
styles={
'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=20,leading=23,alignment=TA_CENTER,textColor=HexColor('#152c43')),
'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=8.5,leading=11,alignment=TA_CENTER),
'headline':ParagraphStyle('headline',fontName='Helvetica-Bold',fontSize=10,leading=13,spaceBefore=7,spaceAfter=4),
'body':ParagraphStyle('body',fontName='Helvetica',fontSize=8.5,leading=11),
'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=10,leading=13,spaceBefore=9,spaceAfter=4,textColor=HexColor('#152c43')),
'role':ParagraphStyle('role',fontName='Helvetica-Bold',fontSize=9,leading=12,spaceBefore=4,spaceAfter=3),
'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=8.5,leading=11,leftIndent=9,firstLineIndent=-7,spaceAfter=3)
}
story=[]
def add(t,s): story.append(Paragraph(t,styles[s]))
add(name,'name');add(contact,'contact');add(links,'contact');add(escape(summary),'headline');add(escape(intro),'body')
add('TECHNICAL SKILLS','section')
for label,txt in skills: add('<b>'+escape(label)+':</b> '+escape(txt),'body');story.append(Spacer(1,3))
add('EXPERIENCE','section')
roles=[('Meesho | Software Development Engineer III (promoted from SDE II)','May 2022 - Present | Bengaluru, India',meesho),('Oracle | Software Developer','Jun 2021 - May 2022 | Hyderabad, India',oracle),('Reliance Jio | Software Developer','Jul 2018 - May 2021 | Navi Mumbai, India',jio)]
for title,date,bullets in roles:
 add(escape(title),'role');add(escape(date),'body');story.append(Spacer(1,3))
 for b in bullets:add('- '+escape(b),'bullet')
add('EDUCATION','section');add('<b>Indian Institute of Technology, Ropar</b> | B.Tech., Electrical and Electronics Engineering | 2014 - 2018','body')
SimpleDocTemplate(str(out/'hritvik-dinkar-resume-genai-systems.pdf'),pagesize=(612,792),rightMargin=33,leftMargin=33,topMargin=26,bottomMargin=25).build(story)
md=['# '+name,contact,links,'## '+summary,intro,'## Technical Skills']
md += ['**'+k+':** '+v for k,v in skills]
md += ['## Experience']
for title,date,bullets in roles:md += ['### '+title,date]+['- '+b for b in bullets]
md += ['## Education','Indian Institute of Technology, Ropar | B.Tech., Electrical and Electronics Engineering | 2014 - 2018']
(out/'hritvik-dinkar-resume-genai-systems.md').write_text('\n\n'.join(md)+'\n')
import pdfplumber
with pdfplumber.open(out/'hritvik-dinkar-resume-genai-systems.pdf') as pdf:
 print('Pages:',len(pdf.pages))
 print('Words:',sum(len((p.extract_text() or '').split()) for p in pdf.pages))

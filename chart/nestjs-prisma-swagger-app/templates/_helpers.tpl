{{- define "nestjs-prisma-swagger-app.name" -}}
nestjs-prisma-swagger-app
{{- end -}}

{{- define "nestjs-prisma-swagger-app.fullname" -}}
{{ .Release.Name }}
{{- end -}}

{{- define "nestjs-prisma-swagger-app.labels" -}}
app.kubernetes.io/name: {{ include "nestjs-prisma-swagger-app.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}

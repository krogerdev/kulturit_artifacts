import { Component, OnInit } from '@angular/core';
import ArtifactsJson from '../../assets/artifacts.json';

interface ARTIFACT {
  artifact_id: string;
  artifact_name: string;
  created_at: string;
  created_by_id: string;
  identifier: string;
  meta_type: string;
  object_type: string;
  superobject_type_id: string;
  thumbnail_dms_identifier?: string;
  thumbnail_id: string;
  updated_at: string;
  thumbnail_url?: string;
}

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  Artifacts: ARTIFACT[] = ArtifactsJson;
  sok = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}

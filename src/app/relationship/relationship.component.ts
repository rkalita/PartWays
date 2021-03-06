import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css'],
})
export class RelationshipComponent implements OnInit {
  dbRef: FirebaseObjectObservable<any>;
  relationship: any;

  constructor(private route: ActivatedRoute, private af: AngularFire) { }

  ngOnInit() {
    this.relationship = this.route.snapshot.data['relationship'];
    this.dbRef = this.af.database.object(`/relationship/dev-data`);
  }

  onSubmit() {
    this.dbRef.set(this.relationship);
  }

}
